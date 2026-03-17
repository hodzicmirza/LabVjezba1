import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../components/ui/dialog";
import { motion } from "framer-motion";

const ImageModal = ({ image, onClose }) => {
  const imageName = image.get("name");
  const modalUrl = image.get("modalUrl");

  return (
    <Dialog open={true} onOpenChange={onClose} >
      <DialogContent className="w-full min-w-[60vw] h-auto bg-amber-50 p-5">
    
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Početno stanje animacije
          animate={{ opacity: 1, scale: 1 }} // Krajnje stanje animacije
          exit={{ opacity: 0, scale: 0.8 }} // Stanje pri zatvaranju
          transition={{ duration: 0.3 }} // Trajanje animacije
        >
          <DialogHeader>
          
          </DialogHeader>
          <DialogDescription>
            <div className="flex justify-center">
              <img
                src={modalUrl}
                alt={imageName}
                className="max-w-full h-auto"
              />
            </div>
          </DialogDescription>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;