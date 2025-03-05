// components/Chip.tsx
import React, { useState, useRef, useEffect } from 'react';

// Expandable Icon (Chevron Down/Right)
const ExpandableIcon = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

// Dropdown Icon (Down Arrow)
const DropDownSvg = () => (
  <svg
    className="w-4 h-4 ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

type HoverItem = 'haveIssues' | 'govPaid' | 'cancel';

const Chip = ({ status }: { status: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<HoverItem | null>(null);
  const [cancelCheckbox, setCancelCheckbox] = useState(false); // State for Cancel checkbox
  const [cancelInput, setCancelInput] = useState(''); // State for Cancel input
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null); // State for selected issue in Have Issues
  const [otherIssueInput, setOtherIssueInput] = useState(''); // State for Other issue input
  const chipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sample array of issues for Have Issues (you can replace this with dynamic data)
  const issues = [
    'Issue 1: Payment Delay',
    'Issue 2: Documentation Error',
    'Issue 3: Technical Glitch',
    'Issue 4: Missing Information',
  ];

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chipRef.current && !chipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredItem(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (item: HoverItem) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  // Cleanup timeout on unmount or when state changes
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative inline-block" ref={chipRef}>
      {/* Chip */}
      <span
        className="flex items-center px-3 py-1 bg-white rounded-full border border-gray-300 text-sm font-medium text-gray-700 cursor-pointer"
        onClick={toggleDropdown}
      >
        {status}
        <DropDownSvg />
      </span>

      {/* Main Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              New
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Ready to be applied
            </li>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer relative flex items-center"
              onMouseEnter={() => handleMouseEnter('haveIssues')}
              onMouseLeave={handleMouseLeave}
            >
              <ExpandableIcon />
              Have Issues
              {hoveredItem === 'haveIssues' && (
                <div className="absolute right-full top-0 mt-0 mr-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    {issues.map((issue, index) => (
                      <li key={index} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                        <input
                          type="radio"
                          name="issue"
                          value={issue}
                          checked={selectedIssue === issue}
                          onChange={() => setSelectedIssue(issue)}
                          className="mr-2"
                        />
                        {issue}
                      </li>
                    ))}
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <input
                        type="radio"
                        name="issue"
                        value="other"
                        checked={selectedIssue === 'other'}
                        onChange={() => setSelectedIssue('other')}
                        className="mr-2"
                      />
                      Other
                    </li>
                    {selectedIssue === 'other' && (
                      <li className="px-4 py-2">
                        <input
                          type="text"
                          value={otherIssueInput}
                          onChange={(e) => setOtherIssueInput(e.target.value)}
                          placeholder="Enter your issue..."
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        />
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Need to pay gov fee
            </li>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer relative flex items-center"
              onMouseEnter={() => handleMouseEnter('govPaid')}
              onMouseLeave={handleMouseLeave}
            >
              <ExpandableIcon />
              Gov fee paid
              {hoveredItem === 'govPaid' && (
                <div className="absolute right-full top-0 mt-0 mr-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Add Application ID
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer relative flex items-center"
              onMouseEnter={() => handleMouseEnter('cancel')}
              onMouseLeave={handleMouseLeave}
            >
              <ExpandableIcon />
              Cancel
              {hoveredItem === 'cancel' && (
                <div className="absolute right-full top-0 mt-0 mr-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <ul className="py-1">
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      Add Reason
                    </li>
                    <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <input
                        type="checkbox"
                        checked={cancelCheckbox}
                        onChange={(e) => setCancelCheckbox(e.target.checked)}
                        className="mr-2"
                      />
                      Add Additional Notes
                    </li>
                    {cancelCheckbox && (
                      <li className="px-4 py-2">
                        <input
                          type="text"
                          value={cancelInput}
                          onChange={(e) => setCancelInput(e.target.value)}
                          placeholder="Enter notes..."
                          className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        />
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </li>
            <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              Resend invite
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Chip;