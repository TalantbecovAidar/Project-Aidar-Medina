import { Box } from "@mui/system";
import React from "react";
import "./AboutUs.css";
// https://www.youtube.com/watch?v=kwlOAeFLKH0

const AboutUs = () => {
  return (
    <Box >
      <div style={{color: "white"}} >
      <video id="background-video" loop autoPlay muted>
        <source src={require("./Video_994875452_28.mp4")} type="video/mp4" />
      </video>
      <div className="div">
        <h2 className="h2">О НАС</h2>
        <br />
        <h4 className="h4">Добро пожаловать на сайт ресторана Arzu!</h4>
        <br />
        <p className="p p-1">
        Сеть ресторанов Arzu - одно из первых восточных заведений города с прекрасной восточной кухней, в сочетании с изысканной кухней запада.

Сеть ресторанов «Arzu» успешно развивается с 1995 года. Все заведения соответствуют самым высоким требованиям и стандартам, наряду с доступной ценовой политикой. Сеть «Arzu» представлена в формате кафе ресторанного типа. Совсем скоро ждите открытия новой сети кафе Arzu-Халал.

Arzu - это уникальный комплекс, состоящий из 9 VIP залов, представляющих собой удивительный и неповторимый интерьер. Более того, каждый зал имеет уникальное меню, которое не оставит вас равнодушными. Ждем Вас в гости!
        </p>
        <br />
        <p className="p p-2">
        Кухня:

азиатская, восточная, европейская
        </p>
        <br />
        <img className="imges" src="https://static.akipress.org/st_yel/image/83/biz.41461652401.1000.jpg" alt="" />
        <br />
        <p className="p">
        Азиатский фьюжн · Фуршеты · Завтрак
        </p>
        <img className="imges"  src="https://static.akipress.org/st_yel/image/83/biz.11461652400.1000.jpg" alt="" />
        <br />
        <p className="p">
        Обслуживание в заведении · Самовывоз · Доставка из ресторана
        </p>
        <img  className="imges" src="https://static.akipress.org/st_yel/image/83/biz.21461652401.1000.jpg" alt="" />
        <br />
        <p className="p">
        Способы оплаты Наличные · Visa · Банковские карты
        </p>
        <img className="imges" src="https://www.planett.ru/upload/pay_picture.png" alt="" />
        <br />
        <p className="p">
          Добро пожаловать в сеть ресторанов ARZU! Присоединяйтесь!
        </p>
       <img className="imges" src="https://realkz.com/images_resize/gallery/61734.jpg" alt="" />
        <br />
        {/* <h2>Наш Топ-новинок</h2> */}
        {/* <div className="img-div">
          <img
            src={require("./62822bec1e673.png")}
            alt=""
          />
          <img
            src={require("./107028.png")}
            alt=""
          />
          <img
            src={require("./caption.jpg")}
            alt=""
          />
        </div> */}
      </div>
    </div>
  ;
;</Box>
  )
}
  
    

export default AboutUs;
