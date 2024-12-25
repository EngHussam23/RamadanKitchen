import AngleLeft from "../assets/Icons/AngleLeft";
import AngleRight from "../assets/Icons/AngleRight";

const Popular = () => {
  return (
    <section className="flex flex-col items-start justify-center px-6 gap-4 overflow-visible">
      <p>وصفات شائعة</p>
      <div className="flex items-center w-full gap-5 overflow-y-auto relative">
        {FoodImages.map((image) => (
          <div className="flex flex-col min-w-fit bg-center bg-contain relative rounded-lg overflow-hidden">
            <p className="flex items-end justify-center absolute w-full bottom-0 -bg--black bg-opacity-50 font-semibold text-xl px-8 py-4 -text--white hover:-bg--Amber hover:bg-opacity-50 cursor-pointer">
              {image.name}
            </p>
            <img
              src={image.url}
              alt={image.name}
              className="bg-center bg-auto w-64 h-48"
            />
          </div>
        ))}
        <div className="-bg--black w-fit h-fit rounded-full p-1 bg-opacity-50 right-0 absolute hover:-bg--Amber cursor-pointer">
          <AngleRight size={32} color="#fff" />
        </div>
        <div className="-bg--black w-fit h-fit rounded-full p-1 bg-opacity-50 left-0 absolute hover:-bg--Amber cursor-pointer">
          <AngleLeft size={32} color="#fff" />
        </div>
      </div>
    </section>
  );
};

const FoodImages = [
  {
    name: "مقلوبة",
    url: "https://www.ngmisr.com/wp-content/uploads/2023/02/1-195.jpg",
  },
  {
    name: "كبسة",
    url: "https://th.bing.com/th/id/OIP.HVbFK98IenazhJMRVcyFTgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "قدرة",
    url: "https://th.bing.com/th/id/R.9896bedbad7e1bec9aae6c6bd3468c68?rik=Qs5zfUnWyPo%2fMw&riu=http%3a%2f%2fcdn5.manalonline.com%2fupload%2f1874_1_788.jpg&ehk=VHwvP4Wfe%2bCNf9GhTC%2bxtUYryk%2bJ5NK1XWATux7SLtA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "فتوش",
    url: "https://th.bing.com/th/id/OIP.m9WQS57c6kG82vTuK8N4CQHaE4?rs=1&pid=ImgDetMain",
  },
  {
    name: "كفتة",
    url: "https://th.bing.com/th/id/OIP.CN56KKdQEt93-xaGMyPPGAHaFY?rs=1&pid=ImgDetMain",
  },
  {
    name: "مقلوبة",
    url: "https://www.ngmisr.com/wp-content/uploads/2023/02/1-195.jpg",
  },
  {
    name: "كبسة",
    url: "https://th.bing.com/th/id/OIP.HVbFK98IenazhJMRVcyFTgHaEK?rs=1&pid=ImgDetMain",
  },
  {
    name: "قدرة",
    url: "https://th.bing.com/th/id/R.9896bedbad7e1bec9aae6c6bd3468c68?rik=Qs5zfUnWyPo%2fMw&riu=http%3a%2f%2fcdn5.manalonline.com%2fupload%2f1874_1_788.jpg&ehk=VHwvP4Wfe%2bCNf9GhTC%2bxtUYryk%2bJ5NK1XWATux7SLtA%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "فتوش",
    url: "https://th.bing.com/th/id/OIP.m9WQS57c6kG82vTuK8N4CQHaE4?rs=1&pid=ImgDetMain",
  },
  {
    name: "كفتة",
    url: "https://th.bing.com/th/id/OIP.CN56KKdQEt93-xaGMyPPGAHaFY?rs=1&pid=ImgDetMain",
  },
];

export default Popular;
