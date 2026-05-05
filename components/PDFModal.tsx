'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Maximize2 } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-dark/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Maximize2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-dark leading-none mb-1">{title}</h3>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Magazine Feature Preview</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <a 
                  href={pdfUrl} 
                  download
                  className="p-2.5 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-primary transition-all"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full bg-dark text-white hover:bg-primary transition-all shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content / Iframe */}
            <div className="flex-1 bg-gray-50 p-2 md:p-4">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full rounded-xl border border-gray-200 shadow-inner"
                title={title}
              ></iframe>
            </div>

            {/* Footer / Caption */}
            <div className="px-6 py-3 bg-white border-t border-gray-100 text-center">
              <p className="text-xs text-gray-400 italic">
                &copy; 2025 Business Insight Magazine. All rights reserved.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
