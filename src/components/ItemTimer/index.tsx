import React from "react";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
import { FaMinus } from "react-icons/fa";
// import { Container } from './styles';
interface ItemProps {
  index: number;
  mask: MaskedInputProps;
  value: string;
  handleRemoveTimer: (index: number) => void;
  handleSetTimeNumber: (value: string, index: number) => void;
}
const ItemTimer: React.FC<ItemProps> = ({
  index,
  value,
  handleRemoveTimer,
  handleSetTimeNumber,
  mask,
}) => {
  return (
    <Row key={index}>
      <Col>
        <InputGroup>
          <MaskedInput
            mask={mask.mask}
            onChange={(e) => {
              handleSetTimeNumber(e.target.value, index);
            }}
            id={`input-${index}`}
            placeholder="11:11"
            value={value}
            className="form-control"
          />

          <InputGroup.Append>
            <Button
              variant="danger"
              onClick={() => {
                handleRemoveTimer(index);
              }}
            >
              <FaMinus size={14}/>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default ItemTimer;
