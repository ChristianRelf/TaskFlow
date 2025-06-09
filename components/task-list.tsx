"use client";

import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Calendar, Trash2, Clock } from "lucide-react";
import { format, isAfter, isToday, isTomorrow } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: number;
  createdAt: number;
  updatedAt: number;
}

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const toggleTask = useMutation(api.tasks.toggleTaskCompletion);
  const deleteTask = useMutation(api.tasks.deleteTask);

  const handleToggleTask = async (taskId: string) => {
    try {
      await toggleTask({ id: taskId as any });
    } catch (error) {
      toast.error("Failed to update task");
      console.error("Error toggling task:", error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await deleteTask({ id: taskId as any });
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
      console.error("Error deleting task:", error);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDueDateInfo = (dueDate?: number) => {
    if (!dueDate) return null;
    
    const date = new Date(dueDate);
    const now = new Date();
    
    if (isToday(date)) {
      return { text: "Due today", color: "text-orange-600" };
    } else if (isTomorrow(date)) {
      return { text: "Due tomorrow", color: "text-yellow-600" };
    } else if (isAfter(now, date)) {
      return { text: "Overdue", color: "text-red-600" };
    } else {
      return { text: `Due ${format(date, "MMM d")}`, color: "text-gray-600" };
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-500">Create your first task to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => {
        const dueDateInfo = getDueDateInfo(task.dueDate);
        
        return (
          <Card 
            key={task._id} 
            className={cn(
              "border-0 shadow-sm hover:shadow-md transition-all duration-200 bg-white/70 backdrop-blur-sm",
              task.completed && "opacity-75"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex items-center mt-1">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => handleToggleTask(task._id)}
                    className="h-5 w-5"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className={cn(
                        "font-medium text-gray-900 leading-5",
                        task.completed && "line-through text-gray-500"
                      )}>
                        {task.title}
                      </h3>
                      
                      {task.description && (
                        <p className={cn(
                          "text-sm text-gray-600 mt-1 leading-4",
                          task.completed && "line-through text-gray-400"
                        )}>
                          {task.description}
                        </p>
                      )}
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Badge 
                          variant="outline" 
                          className={cn("text-xs font-medium", getPriorityColor(task.priority))}
                        >
                          {task.priority}
                        </Badge>
                        
                        {dueDateInfo && (
                          <div className={cn("flex items-center gap-1 text-xs", dueDateInfo.color)}>
                            <Calendar className="h-3 w-3" />
                            <span>{dueDateInfo.text}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-gray-400 hover:text-red-600 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Task</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{task.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction 
                            onClick={() => handleDeleteTask(task._id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}