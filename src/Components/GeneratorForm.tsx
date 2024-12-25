const GeneratorForm = () => {
  return (
    <form
      className="max-w-screen-2xl min-w-screen-MobileSM font-normal px-6"
      method=""
    >
      <label>
        <p>محتارة شو طبخة اليوم؟</p>
        <textarea
          name="Ingredients"
          id="Ingredients"
          title="مكونات الوصفة"
          placeholder="إحكيلي شو عندك بالثلاجة وأنا بعطيك الوصفة..."
          className="w-full h-64 p-4 my-4 -placeholder--gray-400 -bg--gray-100 border-2 -border--gray-400 rounded-xl focus:-border--Copper focus:outline-none"
        ></textarea>
        <button
          type="submit"
          title="إقتراح الوصفة"
          className="flex justify-center items-center text-center w-full p-4 my-4 -bg--Primary-950 -text--white rounded-xl font-semibold hover:-bg--Primary-800 active:-bg--Primary-800 active:shadow-inner active:-shadow--black transition-all duration-200"
        >
          إقترحلي طبخة
        </button>
      </label>
    </form>
  );
};

export default GeneratorForm;
