const Hero = () => {
  return (
    <div className="flex relative w-full">
      <div className="w-full h-full absolute -bg--black bg-opacity-25 top-1/2 bottom-1/2 left-1/2 right-1/2">
        أشهى وصفات لست الكل
      </div>
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar">
        {Images.map((image, index) => (
          <img
            src={image}
            alt={`Image ${index}`}
            className="aspect-auto w-96 h-48 bg-center bg-contain"
          />
        ))}
      </div>
    </div>
  );
};

const Images = [
  "https://www.ngmisr.com/wp-content/uploads/2023/02/1-195.jpg",
  "https://th.bing.com/th/id/OIP.HVbFK98IenazhJMRVcyFTgHaEK?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/R.9896bedbad7e1bec9aae6c6bd3468c68?rik=Qs5zfUnWyPo%2fMw&riu=http%3a%2f%2fcdn5.manalonline.com%2fupload%2f1874_1_788.jpg&ehk=VHwvP4Wfe%2bCNf9GhTC%2bxtUYryk%2bJ5NK1XWATux7SLtA%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.m9WQS57c6kG82vTuK8N4CQHaE4?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.CN56KKdQEt93-xaGMyPPGAHaFY?rs=1&pid=ImgDetMain",
];

export default Hero;
