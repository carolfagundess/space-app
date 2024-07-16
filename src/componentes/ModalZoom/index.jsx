import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const OverLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogSytled = styled.dialog`
  position: absolute;
  top: 294px;
`;

const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <OverLayer />
          <DialogSytled open={!!foto}>
            <Imagem foto={foto} expandida={true} />
            <p>Yess@</p>
            <form method="dialog">
              <button>OK</button>
            </form>
          </DialogSytled>
        </>
      )}
    </>
  );
};

export default ModalZoom;
