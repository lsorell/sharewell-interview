interface Modal1Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal1(props: Modal1Props){
    if (!props.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
        <div className="bg-blue-600 p-6 relative">
          <button
            className="absolute top-4 right-4 text-white text-lg"
            onClick={props.onClose}
          >
            X
          </button>
          <h2 className="text-white text-2xl mb-2">Modal 1</h2>
          <p className="text-blue-100">Lorem Ipsum is simply</p>
          <p className="text-blue-100 mt-4">Thursday, Jun 22, 2024</p>
          <p className="text-blue-100">06:00pm - 07:30pm EST</p>
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full" style={{ top: '1rem', right: '-1rem', backgroundImage: 'url(/path-to-your-image)' }}></div>
        </div>
        <div className="p-6">
          <h3 className="text-gray-900 font-bold">Lorem Ipsum</h3>
          <p className="text-gray-900 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
          <div className="mt-4">
            <p className="text-gray-700">Lorem Ipsum is simply dummy text.</p>
          </div>
        </div>
        <div className="p-4 bg-gray-50 text-center">
          <button className="bg-gray-200 px-4 py-2 rounded-md text-gray-500">LOREM IPSUM</button>
        </div>
      </div>
    </div>
  );
};
