import React from "react";

import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

type AddTransactionDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AddTransactionDialog({
  isOpen,
  onClose,
}: AddTransactionDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-4 max-w-md">
        <DialogTitle>収入・支出の追加</DialogTitle>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">金額</label>
            <input
              type="number"
              className="w-full mt-1 p-2 border rounded"
              placeholder="金額を入力"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">カテゴリー/出所</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded"
              placeholder="カテゴリーや出所を入力"
            />
          </div>
          <div className="flex justify-end">
            <Button type="button" onClick={onClose} className="mr-2">
              キャンセル
            </Button>
            <Button type="submit" variant="default">
              追加
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
