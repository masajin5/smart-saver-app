import React, { useState } from "react";
import { Button } from "./ui/button";
import AddTransactionDialog from "./AddTransactionDialog";

export default function AddTransactionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="my-4">
        収入・支出を追加
      </Button>
      {isOpen && <AddTransactionDialog isOpen={isOpen} onClose={handleClose} />}
    </div>
  );
}
