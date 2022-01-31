import React from "react";
import styled from "styled-components";
import Icon from "react-native-vector-icons/Entypo";

export default function Nintendinho() {
  return (
    <Container>
      <Base>
        <Inset>
          <Directional>
            <DirectionalHorizontal></DirectionalHorizontal>
            <DirectionalVertical>
              <Touch>
                <Icon name="arrow-bold-left" color="#111" size={53} />
              </Touch>
              <Circle />
              <Touch>
                <Icon name="arrow-bold-right" color="#111" size={53} />
              </Touch>
            </DirectionalVertical>
            <DirectionalHorizontal2>
              <Touch>
                <Icon name="arrow-bold-left" color="#111" size={53} />
              </Touch>
              <Touch>
                <Circle />
              </Touch>
              <Touch>
                <Icon name="arrow-bold-right" color="#111" size={53} />
              </Touch>
            </DirectionalHorizontal2>
          </Directional>
          <MiddleKeys>
            <Middle>
              <Text>Selec</Text>
              <Text>Start</Text>
            </Middle>
            <Middle />
            <MiddleTop />
          </MiddleKeys>
        </Inset>
      </Base>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  background: #000;
`;
const Base = styled.View`
  background: #c1c1c3;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Inset = styled.View`
  background: #13161f;
  margin-right: 30px;
  width: 75%;
  height: 90%;
  border-radius: 5px;
`;
const Directional = styled.View``;

const DirectionalHorizontal = styled.View`
  background: #26272b;
  top: 100px;
  left: 22%;
  width: 170px;
  height: 60px;
  border: solid 3px #bfbec4;
  border-radius: 5px;
`;
const DirectionalHorizontal2 = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  background: #26272b;
  top: 103px;
  left: 23%;
  width: 160px;
  height: 54px;
`;
const DirectionalVertical = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #26272b;
  top: 40px;
  left: 55%;
  width: 170px;
  height: 60px;
  border: solid 3px #bfbec4;
  border-radius: 5px;
  transform: rotate(90deg);
`;
const Circle = styled.View`
  background: #000;
  width: 27px;
  height: 27px;
  border-radius: 50px;
  border: solid 2px #555;
`;
const Touch = styled.TouchableOpacity``;

const MiddleKeys = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const MiddleTop = styled.View`
  background: #81837e;
  width: 30px;
  height: 250px;
  top: 130px;
  left: 10px;
  margin: 0 10px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Middle = styled.View`
  justify-content: space-around;
  background: #81837e;
  width: 40px;
  height: 250px;
  border-radius: 10px;
  top: 130px;
  left: 10px;
  margin: 0 10px;
`;

const Text = styled.Text`
  color: #d9161a;
  transform: rotate(90deg);
  font-size: 20px;
`;
