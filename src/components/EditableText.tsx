import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface EditableTextProps {
  value: string;
  onSave: (val: string) => void;
  isEditMode: boolean;
  className?: string;
  multiline?: boolean;
}

export function EditableText({ value, onSave, isEditMode, className, multiline = false }: EditableTextProps) {
  const [val, setVal] = useState(value);

  // Sync val if external value changes (e.g., reset or initial load)
  useEffect(() => {
    setVal(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVal(e.target.value);
    onSave(e.target.value);
  };

  if (isEditMode) {
    if (multiline) {
      return (
        <textarea
          value={val}
          onChange={handleChange}
          className={cn(
            "w-full bg-white/10 border border-white/20 rounded  p-2 outline-none focus:border-white transition-colors resize-none overflow-hidden",
            className
          )}
          rows={Math.max(3, val.split('\n').length)}
        />
      );
    }
    return (
      <input
        type="text"
        value={val}
        onChange={handleChange}
        className={cn(
          "w-full bg-white/10 border border-white/20 rounded px-2 py-1 outline-none focus:border-white transition-colors",
          className
        )}
      />
    );
  }

  return <div className={cn("whitespace-pre-wrap", className)}>{value}</div>;
}
