"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CalendarIcon, MoreHorizontal, Check } from "lucide-react";
import { addDays, format } from "date-fns";

export default function CalendarPicker() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayMonth, setDisplayMonth] = useState<Date>(new Date()); // Ensuring a valid initial state
  const [customDate, setCustomDate] = useState("Today");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const years = Array.from({ length: 31 }, (_, i) => 2000 + i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const customDates = [
    { label: "Today", value: new Date() },
    { label: "Yesterday", value: addDays(new Date(), -1) },
    { label: "Last Week", value: addDays(new Date(), -7) },
  ];

  // Handle custom date selection
  const handleCustomDate = (label: string, date: Date) => {
    setSelectedDate(date);
    setDisplayMonth(date);
    setCustomDate(label);
    setPopoverOpen(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 z-10">
      {/* Button that opens the calendar */}
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-300 text-gray-600 rounded-lg px-4 py-2"
          >
            <CalendarIcon className="w-5 h-5 text-gray-500" />
            {customDate} {/* Shows selected date label */}
          </Button>
        </PopoverTrigger>

        {/* Calendar Popover */}
        <PopoverContent className="w-[320px] p-4 rounded-2xl shadow-lg overflow-visible z-[9999] relative bg-white">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Calendar</h2>
              <p className="text-sm text-gray-500">Select a date</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="w-5 h-5 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Month & Year Selectors */}
          <div className="flex justify-between items-center mt-4">
            <select
              value={months[displayMonth.getMonth()]}
              onChange={(e) => {
                const newMonth = months.indexOf(e.target.value);
                const newDate = new Date(
                  displayMonth.getFullYear(),
                  newMonth,
                  1
                );
                setDisplayMonth(newDate);
              }}
              className="text-sm font-medium p-1 bg-transparent border-none focus:outline-none"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              value={displayMonth.getFullYear()}
              onChange={(e) => {
                const newYear = Number(e.target.value);
                const newDate = new Date(newYear, displayMonth.getMonth(), 1);
                setDisplayMonth(newDate);
              }}
              className="text-sm font-medium p-1 bg-transparent border-none focus:outline-none"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Calendar */}
          <div className="mt-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                if (date) handleCustomDate(format(date, "PPP"), date);
              }}
              month={displayMonth}
              onMonthChange={setDisplayMonth}
              className="rounded-md border"
            />
          </div>

          {/* Custom Date Options */}
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-700">
              Quick Select
            </h3>
            <div className="mt-2 space-y-2">
              {customDates.map(({ label, value }) => (
                <Button
                  key={label}
                  variant="outline"
                  className="w-full flex justify-between"
                  onClick={() => handleCustomDate(label, value)}
                >
                  {label}
                  {customDate === label && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
