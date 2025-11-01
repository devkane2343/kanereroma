import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface CvModalProps {
  children: React.ReactNode;
}

export function CvModal({ children }: CvModalProps) {
  const cvPath = "/Kane Reroma - Updated CV.pdf";

  const handleDownload = () => {
    window.open(cvPath, "_blank");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>My CV</DialogTitle>
          <DialogDescription>
            View and download my updated curriculum vitae.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow overflow-hidden">
          <iframe src={cvPath} className="w-full h-full border-none"></iframe>
        </div>
        <DialogFooter className="mt-4">
          <Button onClick={handleDownload} className="flex items-center gap-2">
            <Download className="h-4 w-4" /> Download CV
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
