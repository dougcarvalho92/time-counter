import React, { KeyboardEvent, useEffect, useState } from "react";
import moment from "moment";
import MaskedInput from "react-text-mask";
import { Button, Col, InputGroup, Jumbotron, Row } from "react-bootstrap";
import ItemTimer from "../ItemTimer";

// import { Container } from './styles';

const ListTimer: React.FC = () => {
  const [total, setTotal] = useState<string>("");
  const [timeSum, setTimeSum] = useState<string[]>([]);
  const [addValue, setAddValue] = useState<string>("");
  useEffect(() => {
    const totalDurations = timeSum
      .slice(1)
      .reduce(
        (prev, cur) => moment.duration(cur).add(prev),
        moment.duration(timeSum[0])
      );
    const days = totalDurations.days();
    const hours = totalDurations.hours() + 24 * days;
    const minutes = totalDurations.minutes();

    setTotal(`Horas: ${hours}, Minutos: ${minutes}`);
  }, [timeSum]);

  function handleSetTimeNumber(n: string, index: number) {
    let newArray = timeSum.slice();
    newArray[index] = n;
    setTimeSum(newArray);
  }

  function handleAddTime() {
    setTimeSum([...timeSum, addValue]);
    setAddValue("");
  }
  function handleRemoveTime(index: number) {
    const newDate = timeSum.filter((value, i) => i !== index);
    setTimeSum(newDate);
  }
  function mask(value: string) {
    return value.charAt(0).match(/[+-]/)
      ? [/[+-]?/, /\d/, /\d/, ":", /[0-5]/, /[\d]/]
      : [/\d/, /\d/, ":", /[0-5]/, /[\d]/];
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddTime();
    }
  };
  return (
    <div>
      <Row className="justify-content-md-center mb-3">
        <Col>
          <h1>{total}</h1>
        </Col>
      </Row>

      <InputGroup className="mb-3">
        <MaskedInput
          mask={mask}
          onChange={(e) => {
            setAddValue(e.target.value);
          }}
          onKeyDown={handleKeyDown}
          id={`add-input`}
          placeholder="11:11"
          value={addValue}
          className="form-control"
        />
        <InputGroup.Append>
          <Button
            variant="primary"
            className="mb-3 block"
            onClick={handleAddTime}
          >
            Adicionar
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <Jumbotron>
        {timeSum.length ? (
          timeSum.map((n, index) => (
            <ItemTimer
              key={index}
              index={index}
              value={n}
              handleRemoveTimer={handleRemoveTime}
              handleSetTimeNumber={handleSetTimeNumber}
              mask={{ mask: mask }}
            />
          ))
        ) : (
          <span>Adicione um valor</span>
        )}
      </Jumbotron>
    </div>
  );
};

export default ListTimer;
