import React from 'react';
import './App.css';
import TermsContent from "./components/content/termsContent/TermsContent";
import Container from './components/layout/Container';
import LoginButton  from './components/form/loginButton/LoginButton';
import Form from './components/form/Form';
import PageHeading from './components/Typography/PageHeading';
import FormHeading from './components/Typography/FormHeading';
import Input from './components/form/inputs/Input';
import AccentedInput from './components/form/inputs/AccentedInput';
import Button from './components/form/buttons/Button';
import FormContainer from './components/layout/FormContainer';


function App() {
  return (
    <Container >
      <PageHeading>CSS Modules</PageHeading>
      <FormContainer>


        <div>
          <FormHeading>Rules</FormHeading>
          <p> "On the other hand, we denounce with righteous indignation and dislike 
            men who are so beguiled and demoralized by the charms of pleasure of the moment, 
</p>
        </div>
      <div>
        <Form>
          <FormHeading>Registrer</FormHeading>
          <Input  placeholder="Name" />
          <AccentedInput  placeholder="City" />
          <Button >Register</Button >
          <Button variant="danger" >Clear</Button >
        </Form>
        </div>
        <div className = "col-login">
          <LoginButton   />
        </div>
        <div>
          <FormHeading>Terms</FormHeading>
     
         <TermsContent />



        </div>
        </FormContainer>
    </Container >


  );
}

export default App;
