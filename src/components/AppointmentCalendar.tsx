
import React, { useState } from 'react';
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "15:00", "15:30", "16:00", "16:30", 
  "17:00", "17:30", "18:00", "18:30"
];


const AppointmentCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Error",
        description: "Por favor, selecciona una fecha y horario para tu consulta.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Consulta reservada",
      description: `Te esperamos el ${format(date, "PPPP", { locale: es })} a las ${timeSlot}. Te enviaremos un email de confirmación.`,
    });

    setDate(undefined);
    setTimeSlot(undefined);
    setName("");
    setPhone("");
    setEmail("");
    setOpen(false);
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0; // 0 is Sunday
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <section id="reservar" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Reserva tu Consulta</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Selecciona la fecha y horario que prefieras para tu consulta y te contactaremos para confirmar tu reserva.
        </p>

        <div className="max-w-4xl mx-auto">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="button-primary mx-auto flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" /> Reservar Consulta
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden">
              <DialogHeader className="p-6 pb-2">
                <DialogTitle className="text-2xl font-bold text-dental-dark">Reserva tu Consulta</DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 pr-3 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => isPastDate(date) || isWeekend(date)}
                    className="p-3 pointer-events-auto"
                    locale={es}
                  />
                </div>
                
                <div className="bg-gray-50 p-6">
                  <form onSubmit={handleBookAppointment}>
                    {date ? (
                      <>
                        <p className="font-medium mb-4">
                          Fecha seleccionada: <span className="text-dental-dark">{format(date, "PPPP", { locale: es })}</span>
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4" /> Selecciona un horario:
                          </h4>
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                className={`text-sm p-2 rounded-md text-center ${
                                  timeSlot === time 
                                    ? "bg-dental text-white" 
                                    : "bg-white border border-gray-200 hover:border-dental"
                                }`}
                                onClick={() => setTimeSlot(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium block mb-1">
                              Nombre completo
                            </label>
                            <Input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Ingresa tu nombre"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">
                              Teléfono
                            </label>
                            <Input
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+54 11 1234-5678"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium block mb-1">
                              Email
                            </label>
                            <Input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              placeholder="tu@email.com"
                              required
                            />
                          </div>
                        </div>
                        
                        <Button 
                          type="submit" 
                          className="button-primary w-full mt-6"
                        >
                          Confirmar Reserva
                        </Button>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 italic text-center">
                          Por favor, selecciona una fecha en el calendario para ver los horarios disponibles.
                        </p>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCalendar;
