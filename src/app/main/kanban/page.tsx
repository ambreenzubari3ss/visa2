"use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "./styles.module.css";
import IndiaFlag from "@/Assets/svgs/IndiaFlag";
// import MoreVerticalSvg from "@/Assets/svgs/MoreVerticalSvg";
import { Button } from "@/components/ui/button";
import CalendarSvg from "@/Assets/svgs/CalendarSvg";
import FlightSvg from "@/Assets/svgs/FlightSvg";
import AddButton from "@/Assets/svgs/AddBtton";
import MoreVerticalSvg from "@/Assets/svgs/MoreVerticalSvg";

// Initial data structure
const initialColumns = {
  todo: {
    id: "todo",
    title: "To Do",
    count: 5,
    tasks: [
      {
        id: "1",
        title: "The Name will go here",
        applicationId: "#651856",
        country: "India",
        applicationDate: "21 Oct 2022",
        flightDate: "21 Oct 2022",
      },
      {
        id: "5",
        title: "Complete Project Report",
        applicationId: "#982741",
        country: "USA",
        applicationDate: "05 Mar 2023",
        flightDate: "10 Mar 2023",
      },
      {
        id: "6",
        title: "Schedule Client Meeting",
        applicationId: "#762839",
        country: "UK",
        applicationDate: "12 Apr 2023",
        flightDate: "15 Apr 2023",
      },
    ],
  },
  haveIssues: {
    id: "haveIssues",
    title: "Have Issues",
    count: 4,
    tasks: [
      {
        id: "2",
        title: "The Name will go here",
        applicationId: "#651856",
        country: "India",
        applicationDate: "21 Oct 2022",
        flightDate: "21 Oct 2022",
      },
      {
        id: "7",
        title: "Payment Pending Issue",
        applicationId: "#198273",
        country: "Germany",
        applicationDate: "02 Jun 2023",
        flightDate: "05 Jun 2023",
      },
      {
        id: "8",
        title: "Missing Documents",
        applicationId: "#452673",
        country: "Canada",
        applicationDate: "15 May 2023",
        flightDate: "20 May 2023",
      },
    ],
  },
  done: {
    id: "done",
    title: "Done",
    count: 4,
    tasks: [
      {
        id: "3",
        title: "The Name will go here",
        applicationId: "#651856",
        country: "India",
        applicationDate: "21 Oct 2022",
        flightDate: "21 Oct 2022",
      },
      {
        id: "9",
        title: "Passport Renewal Completed",
        applicationId: "#762938",
        country: "France",
        applicationDate: "10 Jul 2023",
        flightDate: "12 Jul 2023",
      },
      {
        id: "10",
        title: "Visa Approved",
        applicationId: "#923874",
        country: "Australia",
        applicationDate: "18 Aug 2023",
        flightDate: "22 Aug 2023",
      },
    ],
  },
  rejected: {
    id: "rejected",
    title: "Rejected",
    count: 4,
    tasks: [
      {
        id: "4",
        title: "The Name will go here",
        applicationId: "#651856",
        country: "India",
        applicationDate: "21 Oct 2022",
        flightDate: "21 Oct 2022",
      },
      {
        id: "11",
        title: "Application Denied",
        applicationId: "#182736",
        country: "Italy",
        applicationDate: "25 Sep 2023",
        flightDate: "30 Sep 2023",
      },
      {
        id: "12",
        title: "Background Check Failed",
        applicationId: "#237849",
        country: "Japan",
        applicationDate: "05 Oct 2023",
        flightDate: "08 Oct 2023",
      },
    ],
  },
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // If dropped outside a droppable area
    if (!destination) return;

    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    // Get source and destination columns
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    // If moving within the same column
    if (source.droppableId === destination.droppableId) {
      const newTasks = Array.from(sourceColumn.tasks);
      const [removed] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: newTasks,
        },
      });
    } else {
      // Moving from one column to another
      const sourceTasks = Array.from(sourceColumn.tasks);
      const destTasks = Array.from(destColumn.tasks);
      const [removed] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks,
        },
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={styles.header}>Kanban board</h1>
        <Button variant="outline" className={styles.filtersButton}>
          Filters
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.boardContainer}>
          {Object.values(columns).map((column) => (
            <div key={column.id} className={styles.column}>
              <div className={styles.columnHeader}>
                <div className={styles.columnTitle}>
                  <span>
                    {column.title}({column.count})
                  </span>
                </div>
                {/* <Button variant="ghost" className={styles.addButton}> */}
                <AddButton className="cursor-pointer h-[32px] w-[32px]" />
                {/* </Button> */}
              </div>

              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`${styles.taskList} ${
                      snapshot.isDraggingOver ? styles.draggingOver : ""
                    }`}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${styles.task} ${
                              snapshot.isDragging ? styles.dragging : ""
                            }`}
                          >
                            <div className={styles.taskHeader}>
                              <div className="flex items-center gap-2">
                                <IndiaFlag className="w-5 h-5" />
                                <span className={styles.country}>India</span>
                              </div>
                              <MoreVerticalSvg className="cursor-pointer" />
                            </div>
                            <h3
                              className={
                                column.title !== "Rejected"
                                  ? styles.taskTitle
                                  : styles.rejectedTitle
                              }
                            >
                              {task.title}
                            </h3>
                            <div className={styles.taskInfo}>
                              <span>
                                ID:{" "}
                                <span className="text-[#24282E]">
                                  {task.applicationId}
                                </span>
                              </span>
                              <div className={styles.dates}>
                                <div className="flex gap-1 items-center">
                                  <CalendarSvg />
                                  <span className={styles.dateText}>
                                    {task.applicationDate}
                                  </span>
                                </div>
                                <div className="flex gap-1 items-center">
                                  <FlightSvg />
                                  <span className={styles.dateText}>
                                    {task.applicationDate}
                                  </span>
                                </div>
                                {/* <span>{task.flightDate}</span> */}
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}
