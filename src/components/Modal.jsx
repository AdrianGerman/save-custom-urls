export default function Modal({ title, children, footer, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-6 rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h3 className="text-xl text-white mb-4">{title}</h3>}
        <div>{children}</div>
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  )
}
