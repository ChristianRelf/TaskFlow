"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { TaskList } from "@/components/task-list";
import { CreateTaskForm } from "@/components/create-task-form";
import { DashboardHeader } from "@/components/dashboard-header";
import { TaskStats } from "@/components/task-stats";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

export function Dashboard() {
  const { user } = useUser();
  const tasks = useQuery(api.tasks.getUserTasks, { 
    userId: user?.id || "" 
  });

  if (!user) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Stats Section */}
          <TaskStats tasks={tasks || []} />

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Task Creation */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Create New Task
                  </CardTitle>
                  <CardDescription>
                    Add a new task to your workflow
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CreateTaskForm userId={user.id} />
                </CardContent>
              </Card>
            </div>

            {/* Task Lists */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Your Tasks</CardTitle>
                  <CardDescription>
                    Manage and organize your tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="pending">Pending</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                      <TabsTrigger value="high">High Priority</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="mt-6">
                      <TaskList tasks={tasks || []} />
                    </TabsContent>
                    
                    <TabsContent value="pending" className="mt-6">
                      <TaskList 
                        tasks={(tasks || []).filter(task => !task.completed)} 
                      />
                    </TabsContent>
                    
                    <TabsContent value="completed" className="mt-6">
                      <TaskList 
                        tasks={(tasks || []).filter(task => task.completed)} 
                      />
                    </TabsContent>
                    
                    <TabsContent value="high" className="mt-6">
                      <TaskList 
                        tasks={(tasks || []).filter(task => task.priority === "high")} 
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="border-b border-white/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Skeleton className="h-8 w-32" />
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          <div className="grid md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-8 w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </CardContent>
            </Card>
            
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-48" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <Skeleton key={i} className="h-16 w-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}