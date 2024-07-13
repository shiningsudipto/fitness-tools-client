import { ReactNode, Dispatch, SetStateAction, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  title?: string;
  panelStyle?: string;
}

const ModalV2: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  children,
  title,
  panelStyle,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100]"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`transform overflow-hidden text-left align-middle transition-all rounded-[15px] bg-white shadow-xl w-full max-w-lg ${panelStyle}`}
              onClick={(e) => e.stopPropagation()}
            >
              {title && (
                <div className="header flex items-center justify-between bg-slate-50 text2-semibold px-8 py-4">
                  <p className="font-medium">{title}</p>
                  <button
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    <IoCloseSharp />
                  </button>
                </div>
              )}
              <div className="px-8 py-4">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalV2;
