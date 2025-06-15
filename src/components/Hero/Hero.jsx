import React, { useState } from "react";
import image1 from "../../assets/watch/blue-watch.png";
import image2 from "../../assets/watch/yellow-watch.png";
import image3 from "../../assets/watch/orange-watch.png";

const ImageList = [
  {
    id: 1,
    image: image1,
    price: "200.00",
    tag: "New",
    title: "Next Generation Blue Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni asperiores fugit sint doloremque maxime tempore mollitia adipisci nisi dolores, earum laborum laudantium eveniet,.",
  },
  {
    id: 2,
    image: image2,
    price: "290.00",
    tag: "New",
    title: "Next Generation Yellow Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni asperiores fugit sint doloremque maxime tempore mollitia adipisci nisi dolores, earum laborum laudantium eveniet,.",
  },
  {
    id: 3,
    image: image3,
    price: "128.00",
    tag: "New",
    title: "Next Generation Orange Watch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi magni asperiores fugit sint doloremque maxime tempore mollitia adipisci nisi dolores, earum laborum laudantium eveniet,.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(image1);
  const [title, setTitle] = useState("Best & Smart Digital Products");
  const [description, setDescription] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad hic inventore voluptatem, blanditiis perspiciatis rerum accusamus elit. Ad hic inventore voluptatem, blanditiis perspiciatis rerum accusamus  praesentium unde obcaecati commodi!"
  );

  return (
    <>
      <div className="bg-gray-100 min-h-[550px] sm:min-h-[700px] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
        {/* Background Assets */}
        <div className="h-[700px] w-[700px] bg-primary/90 absolute right-0 -top-1/2 rounded-3xl rotate-45"></div>
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Text Content Section */}
            <div className="flex justify-center flex-col gap-6 pt-12 lg:pr-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold">{title}</h1>
              <p className="text-sm">{description}</p>
              <div>
                <button className="text-white rounded bg-gradient-to-r from-primary to-secondary hover:scale-105 cursor-pointer px-4 py-2 duration-200">
                  Order Now
                </button>
              </div>
              {/* Image Section */}
              <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white rounded-3xl dark:bg-dark pr-10">
                {ImageList.map((list) => (
                  <div
                    key={list.id}
                    onClick={() => {
                      setImageId(list.image);
                      setTitle(list.title);
                      setDescription(list.description);
                    }}
                    className="flex flex-col lg:flex-row items-center gap-1 hover:scale-110 duration-200 cursor-pointer"
                  >
                    <img
                      src={list.image}
                      alt=""
                      className="w-[100px] h-[100px] object-contain inline-block"
                    />
                    <div className="flex flex-col justify-center items-center lg:items-start">
                      <p className="font-bold lg:text-lg">{list.price}</p>
                      <p className="text-xm">{list.tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* image content section */}
            <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              <div className="h-[300px] sm:h-[450px]  overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  alt=""
                  className="mx-auto h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] sm:scale-125 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
