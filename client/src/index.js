import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './components/App';
import TopicWrapper from './components/Questionnaire/TopicWrapper'
import QuestionWrapper from './components/Questionnaire/QuestionWrapper'
import MatchWrapper from './components/Questionnaire/MatchWrapper'

render((
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path ="/1" component={TopicWrapper} />
            <Route path ="/2" component={QuestionWrapper} />
            <Route path ="/3" component={MatchWrapper} />
        </div>
    </Router>
), document.getElementById('root'));