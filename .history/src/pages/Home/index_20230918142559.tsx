import { BannerContainer, Benefist, ProductsContainer, TextContainer } from "./styles";
import IconCart from "../assets/IconCart.svg";
import IconTime from "../assets/IconTime.svg";
import IconPackge from "../assets/IconPackge.svg";
import IconCoffe from "../assets/IconCoffe.svg";

import coffe from "../assets/coffe.png";
import { CoffesOptions } from "../../components/CoffesOptions";

export function Home() {
  return (<>
    <BannerContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </span>

        <Benefist>
          <ul>
            <li className="test">
              <img src={IconCart} alt="" />
              Compra simples e segura
            </li>
            <li>
              <img src={IconPackge} alt="" />
              Embalagem mantém o café intacto
            </li>
          </ul>
          <ul>
            <li>
              <img src={IconTime} alt="" />
              Entrega rápida e rastreada
            </li>
            <li>
              <img src={IconCoffe} alt="" />
              O café chega fresquinho até você
            </li>
          </ul>
        </Benefist>
      </TextContainer>

      <div className="Big">
        <img src={coffe} alt="" />
      </div>
    </BannerContainer>

    <ProductsContainer>
      <h1>Nossos cafés</h1>

      <CoffesOptions/>

    </ProductsContainer>
    </>
  );
}
