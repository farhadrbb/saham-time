import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import s from "../../../../index.module.scss";
import CloseIcon from "@mui/icons-material/Close";

// fake data generator
const getItems = (count,namad) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `${k}`,
    content: namad[k].content,
    
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  background: isDragging ? "#323765" : "#0f1125",

  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  padding: grid,
  width: '100%',
});

const DrapDrop = ({ namad, handleDelete,setstateEdit,stateEdit }) => {


  const [state, setState] = useState({ items: getItems(stateEdit?.length,stateEdit) });

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({
      items,
    });
    setstateEdit(items)
  };



  

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {state?.items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    className={`${s["row-upload-namad"]} mx-auto px-2`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    {item.content.sector_name}
                  
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

// Put the thing into the DOM!
export default DrapDrop;
