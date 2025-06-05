
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Eye, Mail, Phone, ExternalLink } from "lucide-react";

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  expertise: string;
  experience: string;
  portfolio: string | null;
  linkedin: string | null;
  github: string | null;
  cover_letter: string;
  created_at: string;
  status: string;
}

const AdminDashboard = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error);
        toast({
          title: "Error",
          description: "Failed to fetch applications",
          variant: "destructive"
        });
        return;
      }

      setApplications(data || []);
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', applicationId);

      if (error) {
        console.error('Error updating status:', error);
        toast({
          title: "Error",
          description: "Failed to update application status",
          variant: "destructive"
        });
        return;
      }

      // Update local state
      setApplications(prev => 
        prev.map(app => 
          app.id === applicationId 
            ? { ...app, status: newStatus }
            : app
        )
      );

      toast({
        title: "Success",
        description: "Application status updated",
      });
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive"
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'reviewed': return 'bg-blue-500';
      case 'approved': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">Loading applications...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-slate-900/80 border-slate-700">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Admin Dashboard - Applications</CardTitle>
          <p className="text-gray-300">Total Applications: {applications.length}</p>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-gray-300">Name</TableHead>
                <TableHead className="text-gray-300">Email</TableHead>
                <TableHead className="text-gray-300">Expertise</TableHead>
                <TableHead className="text-gray-300">Experience</TableHead>
                <TableHead className="text-gray-300">Status</TableHead>
                <TableHead className="text-gray-300">Submitted</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((application) => (
                <TableRow key={application.id} className="border-slate-700">
                  <TableCell className="text-white font-medium">
                    {application.full_name}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {application.email}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {application.expertise}
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {application.experience}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(application.status)} text-white`}>
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    {formatDate(application.created_at)}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-white hover:bg-slate-700"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-white">
                              Application Details - {selectedApplication?.full_name}
                            </DialogTitle>
                          </DialogHeader>
                          {selectedApplication && (
                            <div className="space-y-4 text-gray-300">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <strong>Email:</strong> {selectedApplication.email}
                                </div>
                                <div>
                                  <strong>Phone:</strong> {selectedApplication.phone}
                                </div>
                                <div>
                                  <strong>Expertise:</strong> {selectedApplication.expertise}
                                </div>
                                <div>
                                  <strong>Experience:</strong> {selectedApplication.experience}
                                </div>
                              </div>
                              
                              {selectedApplication.portfolio && (
                                <div>
                                  <strong>Portfolio:</strong> 
                                  <a 
                                    href={selectedApplication.portfolio} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline ml-2 inline-flex items-center gap-1"
                                  >
                                    {selectedApplication.portfolio}
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </div>
                              )}
                              
                              {selectedApplication.linkedin && (
                                <div>
                                  <strong>LinkedIn:</strong> 
                                  <a 
                                    href={selectedApplication.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline ml-2 inline-flex items-center gap-1"
                                  >
                                    {selectedApplication.linkedin}
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </div>
                              )}
                              
                              {selectedApplication.github && (
                                <div>
                                  <strong>GitHub:</strong> 
                                  <a 
                                    href={selectedApplication.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline ml-2 inline-flex items-center gap-1"
                                  >
                                    {selectedApplication.github}
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </div>
                              )}
                              
                              <div>
                                <strong>Cover Letter:</strong>
                                <p className="mt-2 p-3 bg-slate-800 rounded border border-slate-600 whitespace-pre-wrap">
                                  {selectedApplication.cover_letter}
                                </p>
                              </div>
                              
                              <div className="flex gap-2 pt-4">
                                <Button
                                  onClick={() => updateApplicationStatus(selectedApplication.id, 'reviewed')}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  Mark as Reviewed
                                </Button>
                                <Button
                                  onClick={() => updateApplicationStatus(selectedApplication.id, 'approved')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Approve
                                </Button>
                                <Button
                                  onClick={() => updateApplicationStatus(selectedApplication.id, 'rejected')}
                                  className="bg-red-600 hover:bg-red-700"
                                >
                                  Reject
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {applications.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              No applications submitted yet.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
