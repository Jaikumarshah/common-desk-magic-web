
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface BookingDialogProps {
  trigger: React.ReactNode;
  className?: string;
}

const BookingDialog = ({ trigger, className }: BookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [interestedIn, setInterestedIn] = useState("");
  const [peopleUsingSpace, setPeopleUsingSpace] = useState("");
  const [workPlaceType, setWorkPlaceType] = useState("");
  const [planToMoveIn, setPlanToMoveIn] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const WEBHOOK_URL = "https://prod-cb.snap.pe/chatbot/rest/v1/WPFormLead?client_name=CommonDesk&client_key=efcc3b00-e5ac-4ca6-9d7e-a511b6298e76&source=website";

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", 
    "05:00 PM", "06:00 PM", "07:00 PM"
  ];

  const sendToWebhook = async (data: any) => {
    try {
      // Convert data to URL-encoded format
      const formBody = new URLSearchParams();
      Object.keys(data).forEach(key => {
        formBody.append(key, data[key]);
      });

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      console.log("Webhook response status:", response.status);
      return response.ok;
    } catch (error) {
      console.error("Webhook error:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!date || !time || !name || !email) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Format the date for display
    const formattedDate = date ? format(date, "EEEE, MMMM do, yyyy") : "";
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for webhook
      const webhookData = {
        name,
        email,
        phone: phone || '',
        date: formattedDate,
        time,
        notes: notes || '',
        team_size: teamSize || '',
        interested_in: interestedIn || '',
        people_using_space: peopleUsingSpace || '',
        work_place_type: workPlaceType || '',
        plan_to_move_in: planToMoveIn || '',
        form_type: 'booking',
        timestamp: new Date().toISOString(),
      };

      // Send to webhook first
      const webhookSuccess = await sendToWebhook(webhookData);
      
      // Prepare data for FormSubmit as backup
      const bookingData = {
        name,
        email,
        phone,
        date: formattedDate,
        time,
        notes,
        teamSize,
        interestedIn,
        peopleUsingSpace,
        workPlaceType,
        planToMoveIn,
        submittedAt: new Date().toISOString(),
        _subject: "New Tour Booking Request - Common Desk",
        _captcha: "false"
      };
      
      // Send data using FormSubmit.co service as backup
      const response = await fetch('https://formsubmit.co/ajax/ca.jai22@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      
      if (!response.ok && !webhookSuccess) {
        throw new Error('Both webhook and backup failed');
      }
      
      console.log("Booking data sent successfully:", { webhookSuccess, formSubmitSuccess: response.ok });
      
      // Show success message
      toast.success(`Your tour is scheduled for ${formattedDate} at ${time}. We'll contact you shortly to confirm.`);
      
      // Reset form and close dialog
      resetForm();
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting booking:", error);
      toast.error("Something went wrong. Please try again later or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setDate(undefined);
    setTime("");
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setTeamSize("");
    setInterestedIn("");
    setPeopleUsingSpace("");
    setWorkPlaceType("");
    setPlanToMoveIn("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className={className}>
          {trigger}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book a Tour at Common Desk</DialogTitle>
          <DialogDescription>
            Schedule a visit to explore our workspace and facilities.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Select Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => {
                      // Disable weekends and past dates
                      const day = date.getDay();
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      return date < today || day === 0 || day === 6;
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Select Time</Label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select a time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="+91 9986888639" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="teamSize">Team Size</Label>
              <Input 
                id="teamSize" 
                placeholder="e.g., 5 people" 
                value={teamSize} 
                onChange={(e) => setTeamSize(e.target.value)} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interestedIn">Interested In</Label>
              <select
                id="interestedIn"
                value={interestedIn}
                onChange={(e) => setInterestedIn(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select an option</option>
                <option value="open_desk">Open Desk</option>
                <option value="dedicated">Dedicated Desk</option>
                <option value="cabin">Private Cabin</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="peopleUsingSpace">People Using Space</Label>
              <select
                id="peopleUsingSpace"
                value={peopleUsingSpace}
                onChange={(e) => setPeopleUsingSpace(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select range</option>
                <option value="just_me">Just me</option>
                <option value="1-2">1-2 people</option>
                <option value="3-5">3-5 people</option>
                <option value="6-10">6-10 people</option>
                <option value="more_than_10">More than 10</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="workPlaceType">Work Place Type</Label>
              <Input 
                id="workPlaceType" 
                placeholder="e.g., Tech Startup, Consulting" 
                value={workPlaceType} 
                onChange={(e) => setWorkPlaceType(e.target.value)} 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="planToMoveIn">When do you plan to move in?</Label>
            <Input 
              id="planToMoveIn" 
              placeholder="e.g., Next month, Within 2 weeks" 
              value={planToMoveIn} 
              onChange={(e) => setPlanToMoveIn(e.target.value)} 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea 
              id="notes" 
              placeholder="Tell us about your requirements or any questions you have..." 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              rows={3} 
            />
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-commonBlue hover:bg-commonBlue/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg 
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24"
                  >
                    <circle 
                      className="opacity-25" 
                      cx="12" 
                      cy="12" 
                      r="10" 
                      stroke="currentColor" 
                      strokeWidth="4"
                    ></circle>
                    <path 
                      className="opacity-75" 
                      fill="currentColor" 
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Scheduling...
                </>
              ) : (
                "Schedule Tour"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
