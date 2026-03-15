import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (cardName: string) => void;
}

export const AddCardModal: React.FC<AddCardModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [cardName, setCardName] = useState('');
  const [error, setError] = useState("");
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("sdfghj");

    if (!cardName.trim()) {
      setError("Card name is required");
      return;
    }

    if (cardName.trim()) {
      onSubmit(cardName);
      setCardName("");
      setError("");
      onClose();
    }
  };
  console.log(error);


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md shadow-xl overflow-hidden p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-slate-800 mb-6">Add new card</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="cardName" className="block text-sm font-medium text-slate-700 mb-2">
              Card Name <span className='text-red-500'>*</span>
            </label>
            <input
              type="text"
              id="cardName"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-slate-800"
              placeholder="e.g. John Doe"
              value={cardName}
              onChange={(e) => {
                setCardName(e.target.value);
                if (error) setError("");
              }}

            />
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
            // disabled={!cardName.trim()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
