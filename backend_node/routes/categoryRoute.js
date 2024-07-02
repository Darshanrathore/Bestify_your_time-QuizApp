const express = require('express'),
router=express.Router(),
category=require("../controllers/category/category");

crudQuiz=require("../controllers/quiz/crudQuiz");
question=require("../controllers/question_answer/question_answer");

router.get("/",category.getQuizCategory);

router.get('/:catId', crudQuiz.getCategoryQuiz);

router.post('/:catId', crudQuiz.postCategoryQuiz); // its means  /category/:catId


//edit quiz
router.patch('/:catId/:qid', crudQuiz.pathCategoryQuiz); // its means  /category/:catId/:qid


//delete quiz
router.delete('/:catId/:qid', crudQuiz.deleteCategoryQuiz); // its means  /category/:catId/:qid



//get Question under quiz of a category
 router.get('/:catId/:qid', question.getQuestion); // its means  /category/:catId/:qid


//post Question under quiz of a category
router.post('/:catId/:qid', question.postQuestion); // its means  /category/:catId/:qid

// //patch or edit or update Question under quiz of a category
 router.patch('/:catId/:qid/:quesId', question.patchquestion); // its means  /category/:catId/:qid/:quesId


// //delete Question from quiz of a category
router.delete('/:catId/:qid/:quesId', question.deleteQuestion);

module.exports=router;