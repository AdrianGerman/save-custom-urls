/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Modal({ title, children, footer, onClose }) {
  const initialFocusRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  useEffect(() => {
    if (initialFocusRef.current) {
      initialFocusRef.current.focus()
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-gray-900 p-6 rounded-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {title && <h3 className="text-xl text-white mb-4">{title}</h3>}
          <div>
            {typeof children === "function"
              ? children({ initialFocusRef })
              : children}
          </div>
          {footer && <div className="mt-4">{footer}</div>}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
