import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Modal = ({ label, title, children }) => {
  return (
    <Dialog>
      <DialogTrigger className="py-2 px-4 bg-primaryColor text-white font-semibold rounded-md hover:bg-secondaryColor">
        {label}
      </DialogTrigger>
      <DialogContent className="lg:w-[500px] lg:mt-[120px]">
        <DialogHeader>
          <DialogTitle className="text-center text-secondaryColor">
            {title}
          </DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
