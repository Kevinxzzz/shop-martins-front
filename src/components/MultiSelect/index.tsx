'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';
import type { Category } from '@/types';
import styles from './MultiSelect.module.scss';

interface MultiSelectOption {
  id: string;
  name: string;
}

interface MultiSelectProps {
  options: MultiSelectOption[];
  selected: string[];
  onChange: (ids: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function MultiSelect({ options, selected, onChange, placeholder = 'Selecione...', disabled = false }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const toggle = (id: string) => {
    if (disabled) return;
    if (selected.includes(id)) {
      onChange(selected.filter(s => s !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  const remove = (id: string) => {
    if (disabled) return;
    onChange(selected.filter(s => s !== id));
  };

  const selectedOptions = options.filter(o => selected.includes(o.id));

  return (
    <div className={`${styles.wrapper} ${disabled ? styles.disabled : ''}`} ref={ref}>
      <div 
        className={styles.trigger} 
        onClick={() => !disabled && setOpen(!open)} 
        role="combobox" 
        aria-expanded={open} 
        tabIndex={disabled ? -1 : 0}
      >
        {selectedOptions.length === 0 ? (
          <span className={styles.placeholder}>{placeholder}</span>
        ) : (
          <div className={styles.tags}>
            {selectedOptions.map(opt => (
              <span key={opt.id} className={styles.tag}>
                {opt.name}
                <span
                  role="button"
                  tabIndex={0}
                  className={styles.tagRemove}
                  onClick={e => { e.stopPropagation(); remove(opt.id); }}
                  onKeyDown={e => { if (e.key === 'Enter') { e.stopPropagation(); remove(opt.id); } }}
                  aria-label={`Remover ${opt.name}`}
                >
                  <X size={10} />
                </span>
              </span>
            ))}
          </div>
        )}
        <ChevronDown size={16} className={`${styles.chevron} ${open ? styles.open : ''}`} />
      </div>

      {open && (
        <div className={styles.dropdown}>
          {options.map(opt => (
            <button
              key={opt.id}
              type="button"
              className={`${styles.option} ${selected.includes(opt.id) ? styles.selected : ''}`}
              onClick={() => toggle(opt.id)}
            >
              <span className={styles.checkbox}>
                {selected.includes(opt.id) && <span className={styles.checkmark} />}
              </span>
              {opt.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
