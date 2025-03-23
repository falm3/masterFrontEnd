import { linkRoutes } from 'core/router';
import { Character } from './character.vm';
import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import { TextFieldComponent } from 'common/components';
import * as classes from './character.styles';


interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const EditCharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <>
     <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent name="name" label="Name" InputProps={{ disabled: true }} />
            <TextFieldComponent name="status" label="Status" InputProps={{ disabled: true }} />
            <TextFieldComponent name="species" label="Species" InputProps={{ disabled: true }} />
            <TextFieldComponent name="image" label="Image" InputProps={{ disabled: true }} />
            <TextFieldComponent
              name="bestSentences"
              label="Best sentencies"
              multiline={true}
              rows={5}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
      <p>
        <Link to={linkRoutes.characterCollection}>Back to the list</Link>
      </p>
    </>
  );
};
