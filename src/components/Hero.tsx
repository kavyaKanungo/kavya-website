'use client';

import React, { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { Modal } from './Modal';
import styles from './Hero.module.css';

const sections = [
  { id: 1, label: 'Section 1' },
  { id: 2, label: 'Section 2' },
  { id: 3, label: 'Section 3' },
  { id: 4, label: 'Section 4' },
  { id: 5, label: 'Section 5' },
];

export function Hero() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const { isDark } = useTheme();

  return (
    <>
      <div className={styles.hero}>
        <div className={styles.window}>
          <div className={styles.windowBar}>
            <span className={styles.homeText}>home</span>
          </div>
          <div className={styles.content}>
            <h1 className={styles.headline}>
              hi!{' '}
              <span className={isDark ? '' : styles.orangeText}>i'm Kavya</span>
            </h1>
            <p className={styles.subtitle}>Your creative portfolio awaits</p>

            <div className={styles.buttonGrid}>
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={styles.actionButton}
                  onClick={() => setOpenModal(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {sections.map((section) => (
        <Modal
          key={section.id}
          isOpen={openModal === section.id}
          onClose={() => setOpenModal(null)}
          title={section.label}
        >
          <p>Add your content for {section.label} here.</p>
        </Modal>
      ))}
    </>
  );
}
