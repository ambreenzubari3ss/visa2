"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Check } from "lucide-react";
import { addDays } from "date-fns";

export default function CalendarCard() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [displayMonth, setDisplayMonth] = useState<Date>(new Date()); // Controls calendar view
  const [customDate, setCustomDate] = useState("Today");

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

  // Handle custom date selection
  const handleCustomDate = (label: string) => {
    let newDate = new Date();
    if (label === "Yesterday") newDate = addDays(newDate, -1);
    if (label === "Last Week") newDate = addDays(newDate, -7);
    setSelectedDate(newDate);
    setDisplayMonth(newDate);
    setCustomDate(label);
  };

  return (
    <div className="flex justify-center items-center ">
      {/* Calendar Card */}
      <div className="bg-white rounded-3xl shadow-lg p-5 w-[320px]">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Calendar</h2>
            <p className="text-sm text-gray-500">Lorem ipsum dolor</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-5 h-5" />
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
              const newDate = new Date(displayMonth.getFullYear(), newMonth, 1);
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
              setSelectedDate(date || selectedDate);
              setDisplayMonth(date || selectedDate);
            }}
            month={displayMonth} // Manually control displayed month
            onMonthChange={setDisplayMonth} // Allow navigating with arrows
            className="rounded-md border"
          />
        </div>

        {/* Custom Dates */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700">Custom Dates</h3>
          <div className="mt-2 space-y-2">
            {["Today", "Yesterday", "Last Week"].map((item) => (
              <Button
                key={item}
                variant="outline"
                className="w-full flex justify-between"
                onClick={() => handleCustomDate(item)}
              >
                {item}{" "}
                {customDate === item && (
                  <Check className="w-4 h-4 text-primary" />
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
