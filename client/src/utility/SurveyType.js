// export const surveyHousehold ={
//     "title": "U.S. Household Food Security Survey",
//     "logoPosition": "right",
//     "completedHtml": "<h3>Thank you for completing the survey</h3>",
//     "pages": [
//      {
//       "name": "page1",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question3",
//         "html": "<p style=\"text-align: center;\"><strong>U.S. HOUSEHOLD FOOD SECURITY SURVEY MODULE: THREE-STAGE DESIGN, WITH SCREENERS Economic Research Service, USDA September 2012</strong></p>\n<p><strong><u>Revision Notes</u>:</strong> The food security questions are essentially unchanged from those in the original module first implemented in 1995 and described previously in this document.</p>\n<p><strong>September 2012:&nbsp;</strong></p>\n<p>Corrected skip specifications in AD5&nbsp;</p>\n<p>Added coding specifications for &ldquo;How many days&rdquo; for 30-day version of AD1a and AD5a.&nbsp;</p>\n<p><strong>July 2008:&nbsp;</strong></p>\n<p>Wording of resource constraint in AD2 was corrected to, &ldquo;&hellip;because there wasn&rsquo;t enough money for food&rdquo; to be consistent with the intention of the September 2006 revision.&nbsp;</p>\n<p>Corrected errors in &ldquo;Coding Responses&rdquo; Section</p>\n<p><strong>September 2006:&nbsp;</strong></p>\n<p>Minor changes were introduced to standardize wording of the resource constraint in most questions to read, &ldquo;&hellip;because there wasn&#39;t enough money for food.&rdquo;&nbsp;</p>\n<p>Question order was changed to group the child-referenced questions following the household- and adult-referenced questions. The Committee on National Statistics panel that reviewed the food security measurement methods in 2004-06 recommended this change to reduce cognitive burden on respondents. Conforming changes in screening specifications were also made. NOTE: Question numbers were revised to reflect the new question order.&nbsp;</p>\n<p>Follow up questions to the food sufficiency question (HH1) that were included in earlier versions of the module have been omitted.</p>\n<p>User notes following the questionnaire have been revised to be consistent with current practice and with new labels for ranges of food security and food insecurity introduced by USDA in 2006</p>\n<p><u><strong>Transition into Module (administered to all households): </strong></u></p>\n<p>These next questions are about the food eaten in your household in the last 12 months, since (current month) of last year and whether you were able to afford the food you need.</p>\n<p><u><strong>Optional USDA Food Sufficiency Question/Screener: Question HH1</strong></u></p>\n<p><strong>(This question is optional. It is not used to calculate any of the food security scales. It may be used in conjunction with income as a preliminary screener to reduce respondent burden for high income households).&nbsp;</strong></p>\n<p>HH1. [IF ONE PERSON IN HOUSEHOLD, USE &quot;I&quot; IN PARENTHETICALS, OTHERWISE, USE &quot;WE.&quot;]</p>\n<p>Which of these statements best describes the food eaten in your household in the last 12 months: &mdash;enough of the kinds of food (I/we) want to eat; &mdash;enough, but not always the kinds of food (I/we) want; &mdash;sometimes not enough to eat; or, &mdash;often not enough to eat?</p>\n<p>[1] Enough of the kinds of food we want to eat</p>\n<p>[2] Enough but not always the kinds of food we want</p>\n<p>[3] Sometimes not enough to eat</p>\n<p>[4] Often not enough to eat</p>\n<p>[ ] DK or Refused&nbsp;</p>"
//        },
//        {
//         "type": "html",
//         "name": "question1",
//         "html": "<p>Household Stage 1: Questions HH2-HH4 (asked of all households; begin scale items).</p>\n<p>[IF SINGLE ADULT IN HOUSEHOLD, USE &quot;I,&quot; &quot;MY,&quot; AND &ldquo;YOU&rdquo; IN PARENTHETICALS;</p>\n<p>OTHERWISE, USE &quot;WE,&quot; &quot;OUR,&quot; AND &quot;YOUR HOUSEHOLD.&quot;]</p>\n"
//        },
//        {
//         "type": "radiogroup",
//         "name": "HH2",
//         "title": "Now I’m going to read you several statements that people have made about their foodsituation. For these statements, please tell me whether the statement was often true,sometimes true, or never true for (you/your household) in the last 12 months—that is,since last (name of current month).\nThe first statement is “(I/We) worried whether (my/our) food would run out before (I/we)got money to buy more.” Was that often true, sometimes true, or never true for (you/yourhousehold) in the last 12 months?",
//         "isRequired": true,
//         "choices": [
//          "Often true",
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "Sometimes true"
//          },
//          "Never true",
//          "DK or Refused"
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "HH3",
//         "title": "“The food that (I/we) bought just didn’t last, and (I/we) didn’t have money to get more.”\nWas that often, sometimes, or never true for (you/your household) in the last 12 months??",
//         "isRequired": true,
//         "choices": [
//          "Often true",
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "Sometimes true"
//          },
//          "Never true",
//          "DK or Refused"
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "HH4",
//         "title": "“(I/we) couldn’t afford to eat balanced meals.” Was that often, sometimes, or never true\nfor (you/your household) in the last 12 months?\n",
//         "isRequired": true,
//         "choices": [
//          "Often true",
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "Sometimes true"
//          },
//          "Never true",
//          "DK or Refused"
//         ]
//        }
//       ]
//      },
//      {
//       "name": "page2",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question5",
//         "html": "<p><u><strong>Screener for Stage 2 Adult-Referenced Questions</strong></u>: If affirmative response (i.e., &quot;often true&quot; or &quot;sometimes true&quot;) to one or more of Questions HH2-HH4, OR, response [3] or [4] to question HH1 (if administered), then continue to <strong>Adult Stage 2</strong>; otherwise, if children under age 18 are present in the household, skip to <strong>Child Stage 1</strong>, otherwise skip to <strong>End of Food Security Module.</strong></p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question6",
//         "html": "<p><em><strong>NOTE:</strong></em> In a sample similar to that of the general U.S. population, about 20 percent of households (45 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 2.&nbsp;</p>"
//        },
//        {
//         "type": "html",
//         "name": "question7",
//         "html": "<p><strong><u>Adult Stage 2: Questions AD1-AD4</u> (asked of households passing the screener for Stage 2 adult-referenced questions).</strong></p>\n"
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD1",
//         "title": "AD1 :In the last 12 months, since last (name of current month), did (you/you or other adults in your household) ever cut the size of your meals or skip meals because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Often true",
//           "text": "Yes"
//          },
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "No (Skip AD1a)"
//          },
//          {
//           "value": "Never true",
//           "text": "DK (Skip AD1a)"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD1a",
//         "title": "AD1a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
//         "choices": [
//          "Almost every month",
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "Some months but not every month"
//          },
//          "Only 1 or 2 months",
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD2",
//         "title": "AD2. In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?\n",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "No"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD3",
//         "title": "AD3. In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "No"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD4",
//         "title": "AD4. In the last 12 months, did you lose weight because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "No"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK"
//          }
//         ]
//        }
//       ]
//      },
//      {
//       "name": "page3",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question13",
//         "html": "<p><strong>Screener for Stage 3 Adult-Referenced Questions:</strong> If affirmative response to one or more of questions AD1 through AD4, then continue to<strong> Adult Stage 3</strong>; otherwise, if children under age 18 are present in the household, skip to<strong> Child Stage 1</strong>, otherwise skip to <strong>End of Food Security Module.&nbsp;</strong></p>"
//        },
//        {
//         "type": "html",
//         "name": "question14",
//         "html": "<p><u><strong>NOTE:</strong></u> In a sample similar to that of the general U.S. population, about 8 percent of households (20 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 3.</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question15",
//         "html": "<p><u><strong>Adult Stage 3: Questions AD5-AD5a</strong></u><strong> (asked of households passing screener for Stage 3 adult-referenced questions).</strong></p>\n\n"
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD5",
//         "title": "AD5. In the last 12 months, did (you/you or other adults in your household) ever not eat for a whole day because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "No (Skip AD5a)"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK (Skip AD5a)"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "AD5a",
//         "title": "AD5a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?\n",
//         "choices": [
//          "Almost every month",
//          {
//           "value": {
//            "text": "Sometimes true"
//           },
//           "text": "Some months but not every month"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "Only 1 or 2 months"
//          },
//          {
//           "value": "Only 1 or 4 months",
//           "text": "DK"
//          }
//         ]
//        }
//       ]
//      },
//      {
//       "name": "page4",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question20",
//         "html": "<p><u><strong>Child Stage 1: Questions CH1-CH3 (Transitions and questions CH1 and CH2 are administered to all households with children under age 18)</strong></u> Households with no child under age 18, skip to<strong> End of Food Security Module.</strong></p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question21",
//         "html": "<p>SELECT APPROPRIATE FILLS DEPENDING ON NUMBER OF ADULTS AND NUMBER OF CHILDREN IN THE HOUSEHOLD</p>\n\n"
//        },
//        {
//         "type": "html",
//         "name": "question22",
//         "html": "<p><u><strong>Transition into Child-Referenced Questions: </strong></u></p>\n<p>Now I&#39;m going to read you several statements that people have made about the food situation of their children. For these statements, please tell me whether the statement was OFTEN true, SOMETIMES true, or NEVER true in the last 12 months for (your child/children living in the household who are under 18 years old).</p>\n\n"
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH1",
//         "title": "CH1. “(I/we) relied on only a few kinds of low-cost food to feed (my/our) child/the children) because (I was/we were) running out of money to buy food.” Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Often true"
//          },
//          "Sometimes true",
//          {
//           "value": "Only 1 or 3 months",
//           "text": "Never true"
//          },
//          {
//           "value": "Only 1 or 4 months",
//           "text": "DK or Refused"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH2",
//         "title": "CH2. “(I/We) couldn’t feed (my/our) child/the children) a balanced meal, because (I/we)\ncouldn’t afford that.” Was that often, sometimes, or never true for (you/your household)\nin the last 12 months?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Often true"
//          },
//          "Sometimes true",
//          {
//           "value": "Only 1 or 3 months",
//           "text": "Never true"
//          },
//          {
//           "value": "Only 1 or 4 months",
//           "text": "DK or Refused"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH3",
//         "title": "CH3. \"(My/Our child was/The children were) not eating enough because (I/we) just couldn't afford enough food.\" Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Often true"
//          },
//          "Sometimes true",
//          {
//           "value": "Only 1 or 3 months",
//           "text": "Never true"
//          },
//          {
//           "value": "Only 1 or 4 months",
//           "text": "DK or Refused"
//          }
//         ]
//        }
//       ]
//      },
//      {
//       "name": "page5",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question26",
//         "html": "<p><u><strong>Screener for Stage 2 Child Referenced Questions</strong></u>: If affirmative response (i.e., &quot;often true&quot; or &quot;sometimes true&quot;) to one or more of questions CH1-CH3, then continue to <strong>Child Stage 2</strong>; otherwise skip to <strong>End of Food Security Module.&nbsp;</strong></p>"
//        },
//        {
//         "type": "html",
//         "name": "question27",
//         "html": "<p><u><strong>NOTE</strong></u>: In a sample similar to that of the general U.S. population, about 16 percent of households with children (35 percent of households with children with incomes less than 185 percent of poverty line) will pass this screen and continue to Child Stage 2.</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question28",
//         "html": "<p><strong>Child Stage 2: Questions CH4-CH7 (asked of households passing the screener for stage 2 child-referenced questions). </strong></p>\n<p><strong>NOTE</strong>: In Current Population Survey Food Security Supplements, question CH6 precedes question CH5.</p>\n"
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH4",
//         "title": "CH4. In the last 12 months, since (current month) of last year, did you ever cut the size of (your child's/any of the children's) meals because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": "Sometimes true",
//           "text": "No"
//          },
//          {
//           "value": "Only 1 or 3 months",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH5",
//         "title": "CH5. In the last 12 months, did (CHILD’S NAME/any of the children) ever skip meals because there wasn't enough money for food?\n",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": "Sometimes true",
//           "text": "No (Skip CH5a)"
//          },
//          "DK (Skip CH5a)"
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH5a",
//         "title": "CH5a. [IF YES ABOVE ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?\n\n",
//         "choices": [
//          "Almost every month",
//          {
//           "value": "Sometimes true",
//           "text": "Some months but not every month"
//          },
//          {
//           "value": "DK (Skip CH5a)",
//           "text": "Only 1 or 2 months"
//          },
//          {
//           "value": "DK (Skip CH6a)",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH6",
//         "title": "CH6. In the last 12 months, (was your child/were the children) ever hungry but you just couldn't afford more food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": "Sometimes true",
//           "text": "No"
//          },
//          {
//           "value": "DK (Skip CH6a)",
//           "text": "DK"
//          }
//         ]
//        },
//        {
//         "type": "radiogroup",
//         "name": "CH7",
//         "title": "CH7. In the last 12 months, did (your child/any of the children) ever not eat for a whole day because there wasn't enough money for food?",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "Almost every month",
//           "text": "Yes"
//          },
//          {
//           "value": "Sometimes true",
//           "text": "No"
//          },
//          {
//           "value": "DK (Skip CH6a)",
//           "text": "DK"
//          }
//         ]
//        }
//       ]
//      },
//      {
//       "name": "page7",
//       "elements": [
//        {
//         "type": "html",
//         "name": "question34",
//         "html": "<p style=\"text-align: center;\"><strong>END OF FOOD SECURITY MODULE </strong></p>\n<p style=\"text-align: center;\"><strong>User Notes</strong></p>\n\n"
//        },
//        {
//         "type": "html",
//         "name": "question19",
//         "html": "<p><u><strong>(1) Coding Responses and Assessing Household Food Security Status:</strong></u></p>\n<p>Following is a brief overview of how to code responses and assess household food security status based on various standard scales. For detailed information on these procedures, refer to the Guide to Measuring Household Food Security, Revised 2000, and Measuring Children&rsquo;s Food Security in U.S. Households, 1995-1999. Both publications are available through the ERS Food Security in the United States Briefing Room.&nbsp;</p>\n<p>&nbsp;</p>"
//        },
//        {
//         "type": "html",
//         "name": "question35",
//         "html": "<p>Responses of &ldquo;yes,&rdquo; &ldquo;often,&rdquo; &ldquo;sometimes,&rdquo; &ldquo;almost every month,&rdquo; and &ldquo;some months but not every month&rdquo; are coded as affirmative. The sum of affirmative responses to a specified set of items is referred to as the household&rsquo;s raw score on the scale comprising those items.</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question36",
//         "html": "<p>*Questions HH2 through CH7 comprise the U.S. Household Food Security Scale (questions HH2 through AD5a for households with no child present). Specification of food security status depends on raw score and whether there are children in the household (i.e., whether responses to child-referenced questions are included in the raw score).</p>\n<p>o For households with one or more children:</p>\n<p>&nbsp; &nbsp;--Raw score zero&mdash;High food security</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security</p>\n<p>&nbsp; --Raw score 3-7&mdash;Low food security</p>\n<p>&nbsp; --Raw score 8-18&mdash;Very low food security</p>\n<p>o For households with no child present:</p>\n<p>&nbsp; --Raw score zero&mdash;High food security</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security</p>\n<p>&nbsp; --Raw score 3-5&mdash;Low food security</p>\n<p>&nbsp; --Raw score 6-10&mdash;Very low food security</p>\n<p>Households with high or marginal food security are classified as food secure. Those with low or very low food security are classified as food insecure.</p>\n\n"
//        },
//        {
//         "type": "html",
//         "name": "question37",
//         "html": "<p>* Questions HH2 through AD5a comprise the U.S. Adult Food Security Scale.</p>\n<p>&nbsp; --Raw score zero&mdash;High food security among adults</p>\n<p>&nbsp; --Raw score 1-2&mdash;Marginal food security among adults</p>\n<p>&nbsp; --Raw score 3-5&mdash;Low food security among adults</p>\n<p>&nbsp; --Raw score 6-10&mdash;Very low food security among adults</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question38",
//         "html": "<p>* Questions HH3 through AD3 comprise the six-item Short Module from which the Six-Item Food Security Scale can be calculated.</p>\n<p>&nbsp; --Raw score 0-1&mdash;High or marginal food security (raw score 1 may be considered marginal food security, but a large proportion of households that would be measured as having marginal food security using the household or adult scale will have raw score zero on the six-item scale)</p>\n<p>&nbsp; --Raw score 2-4&mdash;Low food security</p>\n<p>&nbsp; --Raw score 5-6&mdash;Very low food security</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question39",
//         "html": "<p>* Questions CH1 through CH7 comprise the U.S. Children&rsquo;s Food Security Scale.</p>\n<p>&nbsp; --Raw score 0-1&mdash;High or marginal food security among children (raw score 1 may be considered marginal food security, but it is not certain that all households with raw score zero have high food security among children because the scale does not include an assessment of the anxiety component of food insecurity)</p>\n<p>&nbsp; --Raw score 2-4&mdash;Low food security among children</p>\n<p>&nbsp; --Raw score 5-8&mdash;Very low food security among children</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question18",
//         "html": "<p><u><strong>(2) Response Options: For interviewer-administered surveys</strong></u>, DK (&ldquo;don&rsquo;t know&rdquo;) and &ldquo;Refused&rdquo; are blind responses&mdash;that is, they are not presented as response options, but marked if volunteered. For self-administered surveys, &ldquo;don&rsquo;t know&rdquo; is presented as a response option.</p>\n\n"
//        },
//        {
//         "type": "html",
//         "name": "question40",
//         "html": "<p><u><strong>(3) Screening</strong></u>: The two levels of screening for adult-referenced questions and one level for child-referenced questions are provided for surveys in which it is considered important to reduce respondent burden. In pilot surveys intended to validate the module in a new cultural, linguistic, or survey context, screening should be avoided if possible and all questions should be administered to all respondents..</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question41",
//         "html": "<p>To further reduce burden for higher income respondents, a preliminary screener may be constructed using question HH1 along with a household income measure. Households with income above twice the poverty threshold, AND who respond &lt;1&gt; to question HH1 may be skipped to the end of the module and classified as food secure. Use of this preliminary screener reduces total burden in a survey with many higher-income households, and the cost, in terms of accuracy in identifying food-insecure households, is not great. However, research has shown that a small proportion of the higher income households screened out by this procedure will register food insecurity if administered the full module. If question HH1 is not needed for research purposes, a preferred strategy is to omit HH1 and administer Adult Stage 1 of the module to all households and Child Stage 1 of the module to all households with children.</p>\n"
//        },
//        {
//         "type": "html",
//         "name": "question42",
//         "html": "<p><u><strong>(4) 30-Day Reference Period</strong></u>: The questionnaire items may be modified to a 30-day reference period by changing the &ldquo;last 12-month&rdquo; references to &ldquo;last 30 days.&rdquo; In this case, items AD1a, AD5a, and CH5a must be changed to read as follows:&nbsp;</p>"
//        },
//        {
//         "type": "text",
//         "name": "AD1a/AD5a/CH5a [IF YES ABOVE, ASK] In the last 30 days, how many days did this happen?",
//         "isRequired": true
//        },
//        {
//         "type": "dropdown",
//         "name": "location",
//         "title": "The location selected below should indicate your physical location                                      ",
//         "isRequired": true,
//         "choices": [
//          {
//           "value": "item1",
//           "text": "Texas"
//          },
//          {
//           "value": "item2",
//           "text": "California"
//          },
//          {
//           "value": "item3",
//           "text": "Ohio"
//          },
//          {
//           "value": "item4",
//           "text": "Utah"
//          }
//         ]
//        },
//        {
//         "type": "text",
//         "name": "ZIP",
//         "title": "ZIP",
//         "isRequired": true
//        }
//       ]
//      }
//     ]
//    };

export const surveyAdultFood ={
   "title": "U.S. Adult Food Security Survey",
   "logoPosition": "right",
   "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "html",
       "name": "question2",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><strong><u>Revision Notes:</u></strong> The food security questions in the U.S. Adult Food Security Survey Module are essentially unchanged from those in the original module first implemented in 1995.</p>\n\n<p><strong><em>September 2012:</em></strong></p>\n\n<ul>\n\t<li>Corrected skip specifications in AD5</li>\n\t<li>Added coding specifications for &ldquo;How many days&rdquo; for 30-day version of AD1a and AD5a.</li>\n</ul>\n\n<p><strong><em>July 2008:</em></strong></p>\n\n<p style=\"margin-left:38pt;\">&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wording of resource constraint in AD2 was corrected to, &ldquo;&hellip;because there wasn&rsquo;t enough money for food&rdquo; to be consistent with the intention of the September 2006 revision.</p>\n\n<p><strong><em>September 2006:</em></strong></p>\n\n<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minor changes were introduced to standardize wording of the resource constraint in most questions to read, &ldquo;&hellip;because there wasn&#39;t enough money for food.&rdquo;</p>\n\n<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Question numbers were changed to be consistent with those in the revised Household Food Security Survey Module.</p>\n\n<p>&middot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; User notes following the questionnaire were revised to be consistent with current practice and with new labels for ranges of food security and food insecurity introduced by USDA in 2006.</p>\n\n<p>&nbsp;</p>\n\n<p><strong><u>Overview:</u></strong> The U.S. Adult Food Security Survey Module is the same set of questions that is administered as the U.S. Household Food Security Survey Module to households with no child present. For many measurement purposes, the adult module can be used both for households with and without children present.</p>\n\n<p>&nbsp;</p>\n\n<p>The U.S. Adult Food Security Survey Module is the same set of questions that is administered as the U.S. Household Food Security Survey Module to households with no child present. For many measurement purposes, the adult module can be used both for households with and without children present.</p>\n\n<h2 style=\"margin: 0in 0in 0in 0.5in; text-indent: -0.25in; break-after: avoid; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: Symbol; font-weight: normal; font-style: normal;\">&middot;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Advantages (compared with the 18-item household module):<o:p></o:p></span></h2>\n\n<h2 style=\"margin: 0in 0in 0in 1in; text-indent: -0.25in; break-after: auto; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: &quot;Courier New&quot;; font-weight: normal; font-style: normal;\">o<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Less respondent burden.<o:p></o:p></span></h2>\n\n<h2 style=\"margin: 0in 0in 0in 1in; text-indent: -0.25in; break-after: auto; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: &quot;Courier New&quot;; font-weight: normal; font-style: normal;\">o<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Improves comparability of food security statistics between households with and without children and among households with children in different age ranges.<o:p></o:p></span></h2>\n\n<h2 style=\"margin: 0in 0in 0in 1in; text-indent: -0.25in; break-after: auto; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: &quot;Courier New&quot;; font-weight: normal; font-style: normal;\">o<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Avoids asking questions about children&rsquo;s food security, which can be sensitive in some survey contexts.<o:p></o:p></span></h2>\n\n<h2 style=\"margin: 0in 0in 0in 0.5in; text-indent: -0.25in; break-after: avoid; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: Symbol; font-weight: normal; font-style: normal;\">&middot;<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Limitations:<o:p></o:p></span></h2>\n\n<h2 style=\"margin: 0in 0in 0in 1in; text-indent: -0.25in; break-after: auto; font-size: 12pt; font-family: Arial, sans-serif; font-style: italic;\"><span style=\"font-family: &quot;Courier New&quot;; font-weight: normal; font-style: normal;\">o<span style=\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; font-size: 7pt; line-height: normal; font-family: &quot;Times New Roman&quot;;\">&nbsp;&nbsp; </span></span><span style=\"font-family: &quot;CG Times&quot;, serif; font-weight: normal; font-style: normal;\">Does not provide specific information on food security of children.<o:p></o:p></span></h2>\n\n<p><strong><u>Transition Into Module </u></strong><strong>(administered to all households):</strong></p>\n\n<p>These next questions are about the food eaten in your household in the last 12 months, since (current month) of last year and whether you were able to afford the food you need.</p>\n\n<p><strong><u>Optional USDA Food Sufficiency Question/Screener: Question HH1</u></strong><strong>&nbsp; (This question is optional. It is not used to calculate the Adult Food Security Scale. It may be used in conjunction with income as a preliminary screener to reduce respondent burden for high income households).</strong></p>\n\n<p>HH1. &nbsp; [IF ONE PERSON IN HOUSEHOLD, USE &quot;I&quot; IN PARENTHETICALS, OTHERWISE, USE &quot;WE.&quot;]</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Which of these statements best describes the food eaten in your household in the last 12 months: &nbsp;&mdash;enough of the kinds of food (I/we) want to eat; &mdash;enough, but not always the <u>kinds</u> of food (I/we) want; &mdash;sometimes <u>not enough</u> to eat; or, &mdash;<u>often</u> not enough to eat?</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [1]&nbsp;&nbsp; Enough of the kinds of food we want to eat</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [2]&nbsp;&nbsp; Enough but not always the <u>kinds</u> of food we want</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [3]&nbsp;&nbsp; Sometimes <u>not enough</u> to eat</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [4]&nbsp;&nbsp; <u>Often</u> not enough to eat</p>\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; [&nbsp; ]&nbsp;&nbsp; DK or Refused</p>\n\n<p>&nbsp;</p>\n\n<p><strong><u>Household Stage 1: Questions HH2-HH4</u></strong><strong>&nbsp; (asked of all households; begin scale items).</strong></p>\n\n<p>&nbsp;</p>\n\n<p>[IF SINGLE ADULT IN HOUSEHOLD, USE &quot;I,&quot;&nbsp; &quot;MY,&quot; AND &ldquo;YOU&rdquo; IN</p>\n\n<p>PARENTHETICALS;&nbsp; OTHERWISE, USE &quot;WE,&quot; &quot;OUR,&quot; AND &quot;YOUR HOUSEHOLD.&quot;]</p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "HH2",
       "title": "HH2.   Now I’m going to read you several statements that people have made about their food situation.   For these statements, please tell me whether the statement was often true, sometimes true, or never true for (you/your household) in the last 12 months—that is, since last (name of current month). The first statement is “(I/We) worried whether (my/our) food would run out before (I/we) got money to buy more.”  Was that often true, sometimes true, or never true for (you/your household) in the last 12 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "DK or Refused"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "HH3",
       "title": "HH3.   “The food that (I/we) bought just didn’t last, and (I/we) didn’t have money to get  more.”  Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "DK or Refused"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "HH4",
       "title": "HH4.   “(I/we) couldn’t afford to eat balanced meals.”  Was that often, sometimes, or never true for (you/your household) in the last 12 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "DK or Refused"
        }
       ]
      }
     ]
    },
    {
     "name": "page2",
     "elements": [
      {
       "type": "html",
       "name": "question6",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><strong><u>Screener for Stage 2 Adult-Referenced Questions:</u></strong> If affirmative response (i.e., &quot;often true&quot; or &quot;sometimes true&quot;) to one or more of Questions HH2-HH4, OR, response [3] or [4] to question HH1 (if administered), then continue to <strong><em>Adult Stage 2;</em></strong> otherwise skip to <strong><em>End of Adult Food Security Module.</em></strong></p>\n\n<p>&nbsp;</p>\n\n<p><strong><u>NOTE:</u></strong> In a sample similar to that of the general U.S. population, about 20 percent of households (45 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 2.</p>\n\n<p>&nbsp;</p>\n\n<p><strong><u>Adult Stage 2: Questions AD1-AD4</u></strong><strong>&nbsp; (asked of households passing the screener for Stage 2 adult-referenced questions).</strong></p>\n</body>\n</html>\n"
      },
      {
       "type": "checkbox",
       "name": "AD1",
       "title": "AD1.   In the last 12 months, since last (name of current month), did (you/you or other adults in your household) ever cut the size of your meals or skip meals because there wasn't enough money for food?",
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No  (Skip AD1a)"
        },
        {
         "value": "item3",
         "text": "DK  (Skip AD1a)"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "AD1a",
       "title": "AD1a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Almost every month"
        },
        {
         "value": "item2",
         "text": "Some months but not every month"
        },
        {
         "value": "item3",
         "text": "Only 1 or 2 months"
        },
        {
         "value": "item4",
         "text": "DK"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "AD2",
       "title": "AD2.   In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?",
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "DK"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "AD3",
       "title": "AD3.   In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "DK"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "AD4",
       "title": "AD4.   In the last 12 months, did you lose weight because there wasn't enough money for food?",
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "DK"
        }
       ]
      }
     ]
    },
    {
     "name": "page3",
     "elements": [
      {
       "type": "html",
       "name": "question12",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><strong><u>Screener for Stage 3 Adult-Referenced Questions:</u></strong> If affirmative response to one or more of questions AD1 through AD4, then continue to <strong><em>Adult Stage 3;</em></strong> otherwise, skip to <strong><em>End of Adult Food Security Module.</em></strong></p>\n\n<p><strong><u>NOTE:</u></strong> In a sample similar to that of the general U.S. population, about 8 percent of households (20 percent of households with incomes less than 185 percent of poverty line) will pass this screen and continue to Adult Stage 3.</p>\n\n<p><strong><u>Adult Stage 3: Questions AD5-AD5a</u></strong><strong>&nbsp; (asked of households passing screener for Stage 3 adult-referenced questions).</strong></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "AD5",
       "title": "AD5.   In the last 12 months, did (you/you or other adults in your household) ever not eat for a whole day because there wasn't enough money for food?",
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No (Skip AD5a)"
        },
        {
         "value": "item3",
         "text": "DK (Skip AD5a)"
        }
       ]
      },
      {
       "type": "checkbox",
       "name": "AD5a",
       "title": "AD5a. [IF YES ABOVE, ASK] How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Almost every month"
        },
        {
         "value": "item2",
         "text": "Some months but not every month"
        },
        {
         "value": "item3",
         "text": "Only 1 or 2 months"
        },
        {
         "value": "item4",
         "text": "DK"
        }
       ]
      }
     ]
    },
    {
     "name": "page4",
     "elements": [
      {
       "type": "html",
       "name": "question3",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p align=\"center\"><strong>END OF ADULT FOOD SECURITY MODULE</strong></p>\n\n<p align=\"center\"><strong>User Notes</strong></p>\n\n<p align=\"center\">&nbsp;</p>\n\n<p><strong><u>(1) Coding Responses and Assessing Household Adult Food Security Status:</u></strong></p>\n\n<p>Following is a brief overview of how to code responses and assess household food security status based on the Adult Food Security Scale. For detailed information on these procedures, refer to the <em>Guide to Measuring Household Food Security, Revised 2000,</em> available through the ERS Food Security in the United States Briefing Room.</p>\n\n<p>Responses of &ldquo;yes,&rdquo; &ldquo;often,&rdquo; &ldquo;sometimes,&rdquo; &ldquo;almost every month,&rdquo; and &ldquo;some months but not every month&rdquo; are coded as affirmative. The sum of affirmative responses to the 10 questions in the Adult Food Security Scale is the household&rsquo;s raw score on the scale.</p>\n\n<p>Food security status is assigned as follows:</p>\n\n<ul>\n\t<li>Raw score zero&mdash;High food security among adults</li>\n\t<li>Raw score 1-2&mdash;Marginal food security among adults</li>\n\t<li>Raw score 3-5&mdash;Low food security among adults</li>\n\t<li>Raw score 6-10&mdash;Very low food security among adults</li>\n</ul>\n\n<p>For some reporting purposes, the food security status of the first two categories in combination is described as food secure and the latter two as food insecure.</p>\n\n<p><strong><u>(2) Response Options:</u></strong> For interviewer-administered surveys, DK (&ldquo;don&rsquo;t know&rdquo;) and &ldquo;Refused&rdquo; are blind responses&mdash;that is, they are not presented as response options but marked if volunteered. For self-administered surveys, &ldquo;don&rsquo;t know&rdquo; is presented as a response option.</p>\n\n<p><strong><u>(3) Screening:</u></strong> The two levels of screening for adult-referenced questions are provided for surveys in which it is considered important to reduce respondent burden. In pilot surveys intended to validate the module in a new cultural, linguistic, or survey context, screening should be avoided if possible and all questions should be administered to all respondents.</p>\n\n<p>To further reduce burden for higher income respondents, a preliminary screener may be constructed using question HH1 along with a household income measure. Households with income above twice the poverty threshold AND who respond &lt;1&gt; to question HH1 may be skipped to the end of the module and classified as food secure. Using this preliminary screener reduces total burden in a survey with many higher income households, and the cost, in terms of accuracy in identifying food-insecure households, is not great. However, research has shown that a small proportion of the higher income households screened out by this procedure will register food insecurity if administered the full module. If question HH1 is not needed for research purposes, a preferred strategy is to omit HH1 and administer Adult Stage 1 of the module to all households.</p>\n\n<p><strong><u>(4) 30-Day Reference Period:</u></strong>&nbsp; The questionnaire items may be modified to a 30-day reference period by changing the &ldquo;last 12-month&rdquo; references to &ldquo;last 30 days.&rdquo; In this case, items AD1a and AD5a must be changed to read as follows:</p>\n</body>\n</html>\n"
      },
      {
       "type": "text",
       "name": "AD1a/AD5a",
       "title": "AD1a/AD5a.   [IF YES ABOVE, ASK] In the last 30 days, how many days did this happen? (Please input \"DK\" if you don't know)"
      },
      {
       "type": "html",
       "name": "question1",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p>Responses of 3 days or more are coded as &ldquo;affirmative&rdquo; responses.</p>\n</body>\n</html>"
      }
     ]
    }
   ]
  }

export const surveyChildrenFood = {
   "title": "Self-Administered Food Security Survey Module for Children Ages 12 Years and Older",
   "logoPosition": "right",
   "pages": [
      {
      "name": "page1",
      "elements": [
      {
         "type": "html",
         "name": "Pre1",
         "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><strong><u>Background:</u></strong>&nbsp; The Child Food Security Survey Module was developed by researchers at the University of&nbsp;Southern Mississippi in collaboration with ERS and documented in &ldquo;Food Security of Older Children Can Be&nbsp;Assessed Using a Standardized Survey Instrument,&rdquo; by Carol L. Connell, Mark Nord, Kristi L. Lofton, and Kathy&nbsp;Yadrick (published by the&nbsp;<em>Journal of Nutrition</em>, vol. 134, no. 10, pp. 2566-72, 2004). Internal validity of the&nbsp;module was found adequate for children ages 12 and older, but its use is not recommended for younger children.</p>\n\n<p>Initial validation was conducted in a sample of children from a school in Mississippi. Use of the module in other&nbsp;regions of the country should be considered exploratory until further validation assessment is conducted.</p>\n\n<p>Cognitive testing indicated that recall and responses for a 12-month period might not be reliable, and a 30-day&nbsp;reference period is recommended.</p>\n</body>\n</html>"
      },
      {
         "type": "html",
         "name": "pre2",
         "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p align=\"center\"><strong>[Begin Child Food Security Survey Module]</strong></p>\n\n<p>The following questions are about the food situation in your home <strong>during the last month</strong>.&nbsp; Please circle the answer that best describes you.&nbsp; Do not put your name on the paper.&nbsp; Your answers will remain a secret.</p>\n</body>\n</html>\n"
      },
      {
         "type": "checkbox",
         "name": "question1",
         "title": "Did you worry that food at home would run out before your family got money to buy more?  ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question2",
         "title": "Did the food that your family bought run out, and you didn’t have money to get more? ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question3",
         "title": "Did your meals only include a few kinds of cheap foods because your family was running out of money to buy food?  ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question4",
         "title": "How often were you not able to eat a balanced meal because your family didn’t have enough money? ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question5",
         "title": "Did you have to eat less because your family didn’t have enough money to buy food? ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question6",
         "title": "Has the size of your meals been cut because your family didn’t have enough money for food?",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question7",
         "title": "Did you have to skip a meal because your family didn’t have enough money for food? ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question8",
         "title": "Were you hungry but didn’t eat because your family didn’t have enough food?",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "checkbox",
         "name": "question9",
         "title": "Did you not eat for a whole day because your family didn’t have enough money for food? ",
         "choices": [
         {
         "value": "item1",
         "text": "A LOT"
         },
         {
         "value": "item2",
         "text": "SOMETIMES"
         },
         {
         "value": "item3",
         "text": "NEVER"
         }
         ]
      },
      {
         "type": "html",
         "name": "end",
         "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p align=\"center\"><strong>[End of Child Food Security Survey Module]</strong></p>\n</body>\n</html>"
      }
      ]
      }
   ]
}

export const surveyHousehold = {
      "title": "U.S. HOUSEHOLD FOOD SECURITY SURVEY",
      "logoPosition": "right",
      "pages": [
       {
        "name": "page1",
        "elements": [
         {
          "type": "html",
          "name": "Intro_1",
          "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">These next questions are about the food eaten in your household in the last 12 months, since November&nbsp;of last year and whether you were able to afford the food you need.</span></p>\n</body>\n</html>"
         },
         {
          "type": "boolean",
          "name": "bool_children",
          "title": "Do you have children under the age of 18 in your household?",
          "isRequired": true
         },
         {
          "type": "checkbox",
          "name": "HH1",
          "title": "Which of these statements best describes the food eaten in your household in the last 12 months?",
          "choices": [
           {
            "value": "item1",
            "text": "Enough of the kinds of food we want to eat"
           },
           {
            "value": "item2",
            "text": "Enough, but not always the kinds of food we want"
           },
           {
            "value": "item3",
            "text": "Sometimes not enough to eat"
           },
           {
            "value": "item4",
            "text": "Often not enough to eat"
           },
           {
            "value": "item5",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         }
        ]
       },
       {
        "name": "page2",
        "elements": [
         {
          "type": "html",
          "name": "Intro_2",
          "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Next, please tell me whether the statement was <u>often</u> true, <u>sometimes</u> true, or <u>never</u> true for your household&nbsp;in the last 12 months&mdash;that is, since last November.</span></p>\n</body>\n</html>"
         },
         {
          "type": "checkbox",
          "name": "HH2",
          "title": "“We worried whether our food would run out before we got money to buy more.”  Was that often true, sometimes true, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "HH3",
          "title": "“The food that we bought just didn’t last, and we didn’t have money to get  more.”  Was that often, sometimes, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "HH4",
          "title": "“We couldn’t afford to eat balanced meals.”   Was that often, sometimes, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         }
        ]
       },
       {
        "name": "page_AD",
        "elements": [
         {
          "type": "checkbox",
          "name": "AD1",
          "title": "In the last 12 months, since last November, did you or other adults in your household ever cut the size of your meals or skip meals because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "AD1a",
          "visibleIf": "{AD1} = ['item1']",
          "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
          "choices": [
           {
            "value": "item1",
            "text": "Almost every month"
           },
           {
            "value": "item2",
            "text": "Some months but not every month"
           },
           {
            "value": "item3",
            "text": "Only 1 or 2 months"
           },
           {
            "value": "item4",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "AD2",
          "title": "In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "AD3",
          "title": "In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "AD4",
          "title": "In the last 12 months, did you lose weight because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         }
        ],
        "visibleIf": "{HH2} anyof ['item1', 'item2'] or {HH3} anyof ['item1', 'item2'] or {HH4} anyof ['item1', 'item2'] or {HH1} anyof ['item3', 'item4']"
       },
       {
        "name": "page_AD_2",
        "elements": [
         {
          "type": "checkbox",
          "name": "AD5",
          "title": "In the last 12 months, did you or other adults in your household ever not eat for a whole day because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "AD5a",
          "visibleIf": "{AD5} = ['item1']",
          "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
          "choices": [
           {
            "value": "item1",
            "text": "Almost every month"
           },
           {
            "value": "item2",
            "text": "Some months but not every month"
           },
           {
            "value": "item3",
            "text": "Only 1 or 2 months"
           },
           {
            "value": "item4",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         }
        ],
        "visibleIf": "{AD1} = ['item1'] or {AD2} = ['item1'] or {AD3} = ['item1'] or {AD4} = ['item1']"
       },
       {
        "name": "page_CH",
        "elements": [
         {
          "type": "html",
          "name": "Intro_CH",
          "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Next, please tell me whether the statements was OFTEN true, SOMETIMES true, or NEVER true in the last 12 months for your children living in the household who are under 18 years old.</span></p>\n</body>\n</html>"
         },
         {
          "type": "checkbox",
          "name": "CH1",
          "title": "“We relied on only a few kinds of low-cost food to feed our the children because we were running out of money to buy food.” Was that often, sometimes, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH2",
          "title": "“We couldn’t feed our the children a balanced meal, because we couldn’t afford that.” Was that often, sometimes, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH3",
          "title": "\"The children were not eating enough because we just couldn't afford enough food.\" Was that often, sometimes, or never true for your household in the last 12 months?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Often true"
           },
           {
            "value": "item2",
            "text": "Sometimes true"
           },
           {
            "value": "item3",
            "text": "Never true"
           },
           {
            "value": "item4",
            "text": "I don't know, or I refuse to answer"
           }
          ],
          "maxSelectedChoices": 1
         }
        ],
        "visibleIf": "{bool_children} = true"
       },
       {
        "name": "page_CH_2",
        "elements": [
         {
          "type": "checkbox",
          "name": "CH4",
          "title": "In the last 12 months, since November of last year, did you ever cut the size of any of the children's meals because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH5",
          "title": "In the last 12 months, did any of the children ever skip meals because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH5a",
          "visibleIf": "{CH5} = ['item1']",
          "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
          "choices": [
           {
            "value": "item1",
            "text": "Almost every month"
           },
           {
            "value": "item2",
            "text": "Some months but not every month"
           },
           {
            "value": "item3",
            "text": "Only 1 or 2 months"
           },
           {
            "value": "item4",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH6",
          "title": "In the last 12 months, were the children ever hungry but you just couldn't afford more food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         },
         {
          "type": "checkbox",
          "name": "CH7",
          "title": "In the last 12 months, did any of the children ever not eat for a whole day because there wasn't enough money for food?",
          "isRequired": true,
          "choices": [
           {
            "value": "item1",
            "text": "Yes"
           },
           {
            "value": "item2",
            "text": "No"
           },
           {
            "value": "item3",
            "text": "I don't know"
           }
          ],
          "maxSelectedChoices": 1
         }
        ],
        "visibleIf": "{CH1} anyof ['item2', 'item1'] or {CH2} anyof ['item1', 'item2'] or {CH3} anyof ['item1', 'item2']"
       }
      ]
     
}

export const surveyAdultFoodUpdate = {
   "title": "U.S. Adult Food Security Survey",
   "logoPosition": "right",
   "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "html",
       "name": "Intro_1",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">These next questions are about the food eaten in your household in the last 12 months, since November&nbsp;of last year and whether you were able to afford the food you need.</span></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "HH1",
       "title": "Which of these statements best describes the food eaten in your household in the last 12 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Enough of the kinds of food we want to eat"
        },
        {
         "value": "item2",
         "text": "Enough, but not always the kinds of food we want"
        },
        {
         "value": "item3",
         "text": "Sometimes not enough to eat"
        },
        {
         "value": "item4",
         "text": "Often not enough to eat"
        },
        {
         "value": "item5",
         "text": "I don't know, or I refuse to answer"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page2",
     "elements": [
      {
       "type": "html",
       "name": "Intro_2",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Next, please tell me whether the statement was <u>often</u> true, <u>sometimes</u> true, or <u>never</u> true for your household&nbsp;in the last 12 months&mdash;that is, since last November.</span></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "HH2",
       "title": "“We worried whether our food would run out before we got money to buy more.”  Was that often true, sometimes true, or never true for your household in the last 12 months?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "I don't know, or I refuse to answer"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH3",
       "title": "“The food that we bought just didn’t last, and we didn’t have money to get  more.”  Was that often, sometimes, or never true for your household in the last 12 months?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "I don't know, or I refuse to answer"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH4",
       "title": "“We couldn’t afford to eat balanced meals.”   Was that often, sometimes, or never true for your household in the last 12 months?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Often true"
        },
        {
         "value": "item2",
         "text": "Sometimes true"
        },
        {
         "value": "item3",
         "text": "Never true"
        },
        {
         "value": "item4",
         "text": "I don't know, or I refuse to answer"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page_AD",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD1",
       "title": "In the last 12 months, since last November, did you or other adults in your household ever cut the size of your meals or skip meals because there wasn't enough money for food?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD1a",
       "visibleIf": "{AD1} = ['item1']",
       "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Almost every month"
        },
        {
         "value": "item2",
         "text": "Some months but not every month"
        },
        {
         "value": "item3",
         "text": "Only 1 or 2 months"
        },
        {
         "value": "item4",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD2",
       "title": "In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD3",
       "title": "In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD4",
       "title": "In the last 12 months, did you lose weight because there wasn't enough money for food?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{HH2} anyof ['item1', 'item2'] or {HH3} anyof ['item1', 'item2'] or {HH4} anyof ['item1', 'item2'] or {HH1} anyof ['item3', 'item4']"
    },
    {
     "name": "page_AD_2",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD5",
       "title": "In the last 12 months, did you or other adults in your household ever not eat for a whole day because there wasn't enough money for food?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Yes"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD5a",
       "visibleIf": "{AD5} = ['item1']",
       "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
       "choices": [
        {
         "value": "item1",
         "text": "Almost every month"
        },
        {
         "value": "item2",
         "text": "Some months but not every month"
        },
        {
         "value": "item3",
         "text": "Only 1 or 2 months"
        },
        {
         "value": "item4",
         "text": "I don't know"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{AD1} = ['item1'] or {AD2} = ['item1'] or {AD3} = ['item1'] or {AD4} = ['item1']"
    }
   ]
}

export const surveyShort = {
   "title": "Six-Item Short Form of the Food Security Survey",
   "logoPosition": "right",
   "pages": [
      {
      "name": "page1",
      "elements": [
      {
         "type": "html",
         "name": "Intro_1",
         "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">These next questions are about the food eaten in your household in the last 12 months, since November&nbsp;of last year and whether you were able to afford the food you need.</span></p>\n</body>\n</html>"
      },
      {
         "type": "html",
         "name": "Intro_2",
         "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Next, please tell me whether the statement was <u>often</u> true, <u>sometimes</u> true, or <u>never</u> true for your household&nbsp;in the last 12 months&mdash;that is, since last November.</span></p>\n</body>\n</html>"
      },
      {
         "type": "checkbox",
         "name": "HH3",
         "title": "“The food that we bought just didn’t last, and we didn’t have money to get  more.”  Was that often, sometimes, or never true for your household in the last 12 months?",
         "isRequired": true,
         "choices": [
         {
         "value": "item1",
         "text": "Often true"
         },
         {
         "value": "item2",
         "text": "Sometimes true"
         },
         {
         "value": "item3",
         "text": "Never true"
         },
         {
         "value": "item4",
         "text": "I don't know, or I refuse to answer"
         }
         ],
         "maxSelectedChoices": 1
      },
      {
         "type": "checkbox",
         "name": "HH4",
         "title": "“We couldn’t afford to eat balanced meals.”   Was that often, sometimes, or never true for your household in the last 12 months?",
         "isRequired": true,
         "choices": [
         {
         "value": "item1",
         "text": "Often true"
         },
         {
         "value": "item2",
         "text": "Sometimes true"
         },
         {
         "value": "item3",
         "text": "Never true"
         },
         {
         "value": "item4",
         "text": "I don't know, or I refuse to answer"
         }
         ],
         "maxSelectedChoices": 1
      },
      {
         "type": "checkbox",
         "name": "AD1",
         "title": "In the last 12 months, since last November, did you or other adults in your household ever cut the size of your meals or skip meals because there wasn't enough money for food?",
         "isRequired": true,
         "choices": [
         {
         "value": "item1",
         "text": "Yes"
         },
         {
         "value": "item2",
         "text": "No"
         },
         {
         "value": "item3",
         "text": "I don't know"
         }
         ],
         "maxSelectedChoices": 1
      },
      {
         "type": "checkbox",
         "name": "AD1a",
         "visibleIf": "{AD1} = ['item1']",
         "title": "How often did this happen—almost every month, some months but not every month, or in only 1 or 2 months?",
         "choices": [
         {
         "value": "item1",
         "text": "Almost every month"
         },
         {
         "value": "item2",
         "text": "Some months but not every month"
         },
         {
         "value": "item3",
         "text": "Only 1 or 2 months"
         },
         {
         "value": "item4",
         "text": "I don't know"
         }
         ],
         "maxSelectedChoices": 1
      },
      {
         "type": "checkbox",
         "name": "AD2",
         "title": "In the last 12 months, did you ever eat less than you felt you should because there wasn't enough money for food?",
         "isRequired": true,
         "choices": [
         {
         "value": "item1",
         "text": "Yes"
         },
         {
         "value": "item2",
         "text": "No"
         },
         {
         "value": "item3",
         "text": "I don't know"
         }
         ],
         "maxSelectedChoices": 1
      },
      {
         "type": "checkbox",
         "name": "AD3",
         "title": "In the last 12 months, were you every hungry but didn't eat because there wasn't enough money for food?",
         "isRequired": true,
         "choices": [
         {
         "value": "item1",
         "text": "Yes"
         },
         {
         "value": "item2",
         "text": "No"
         },
         {
         "value": "item3",
         "text": "I don't know"
         }
         ],
         "maxSelectedChoices": 1
      }
      ]
      }
   ]
}

export const surveyHouseholdSpanish = {
   "title": "Encuesta sobre la seguridad alimentaria de los hogares de EE.UU.",
   "logoPosition": "right",
   "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "html",
       "name": "Intro_1",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Las siguientes preguntas tratan sobre los alimentos consumidos en su hogar durante los &uacute;ltimos 12 meses, desde Noviembre del a&ntilde;o pasado, y su capacidad para comprar la comida que se necesitaba.</span></p>\n</body>\n</html>"
      },
      {
       "type": "boolean",
       "name": "bool_children",
       "title": "¿Tiene hijos menores de 18 años en su hogar?",
       "isRequired": true,
       "labelTrue": "Sí"
      },
      {
       "type": "checkbox",
       "name": "HH1",
       "title": "¿Cuál de las siguentes declaraciones describe mejor la situación alimentaria en su hogar en los últimos 12 meses?",
       "choices": [
        {
         "value": "item1",
         "text": "Siempre comemos lo suficiente y los tipos de alimentos que deseamos"
        },
        {
         "value": "item2",
         "text": "Comemos lo suficiente pero no siempre lo que deseamos"
        },
        {
         "value": "item3",
         "text": "A veces no comemos lo suficiente o"
        },
        {
         "value": "item4",
         "text": "Frecuentemente no comemos lo suficiente"
        },
        {
         "value": "item5",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page2",
     "elements": [
      {
       "type": "html",
       "name": "Intro_2",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Ahora le voy a leer algunas declaraciones que las personas han hecho sobre situaci&oacute;nes alimentarias. Para cada uno, favor de indicar si ha ocurrido frecuentemente, a veces, o nunca en su hogar en los &uacute;ltimos 12 meses, dese Noviembre del a&ntilde;o pasado.</span></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "HH2",
       "title": "“Nos preocupamos que la comida se podía acabar antes de tener dinero para comprar más.” En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH3",
       "title": "La comida que compramos no rindió lo suficiente, y no teníamos dinero para comprar más.\" En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH4",
       "title": "“No teníamos recursos suficientes para comer comida variada y nutritiva.” En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page_AD",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD1",
       "title": "En los últimos 12 meses, ¿Ud. u otro adulto del hogar redujo alguna vez la cantidad de sus comidas o dejó de desayunar, almorzar o cenar porque le faltaba dinero para alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD1a",
       "visibleIf": "{AD1} = ['item1']",
       "title": "¿Con qué frecuencia sucedió esto? Casi todos los meses, algunos meses pero no todos, o solamente en 1 ó 2 meses?",
       "choices": [
        {
         "value": "item1",
         "text": "Casi todos los meses"
        },
        {
         "value": "item2",
         "text": "Algunos meses pero no todos"
        },
        {
         "value": "item3",
         "text": "Solamente en 1 ó 2 meses"
        },
        {
         "value": "item4",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD2",
       "title": "En los últimos 12 meses, ¿comió Ud. alguna vez menos de lo que pensaba que debía comer porque le faltaba dinero para alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD3",
       "title": "En los últimos 12 meses, ¿Tuvo Ud. hambre alguna vez pero no comió porque le faltaba dinero para alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD4",
       "title": "En los últimos 12 meses, ¿Perdió Ud. peso porque no comió los alimentos suficientes por falta de dinero para comida?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{HH2} anyof ['item1', 'item2'] or {HH3} anyof ['item1', 'item2'] or {HH4} anyof ['item1', 'item2'] or {HH1} anyof ['item3', 'item4']"
    },
    {
     "name": "page_AD_2",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD5",
       "title": "En los últimos 12 meses, ¿alguna vez no comió Ud. u otro adulto del hogar en todo el día porque le faltaba dinero para comida?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD5a",
       "visibleIf": "{AD5} = ['item1']",
       "title": "¿Con qué frecuencia sucedió esto? Casi todos los meses, algunos meses pero no todos, o solamente en 1 ó 2 meses?",
       "choices": [
        {
         "value": "item1",
         "text": "Casi todos los meses"
        },
        {
         "value": "item2",
         "text": "Algunos meses pero no todos"
        },
        {
         "value": "item3",
         "text": "Solamente en 1 ó 2 meses"
        },
        {
         "value": "item4",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{AD1} = ['item1'] or {AD2} = ['item1'] or {AD3} = ['item1'] or {AD4} = ['item1']"
    },
    {
     "name": "page_CH",
     "elements": [
      {
       "type": "html",
       "name": "Intro_CH",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">Ahora le voy a leer algunas declaraciones que las personas han hecho sobre la situaci&oacute;n alimentaria de sus ni&ntilde;os. Para cada uno, favor de indicar si ocurri&oacute; frecuentemente, algunas veces, o nunca en los &uacute;ltimos 12 meses a ni&ntilde;os o j&oacute;venes menores de 18 a&ntilde;os que viven en su hogar.</span></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "CH1",
       "title": "“Tuvimos que alimentar a los niños o jóvenes del hogar con alimentos de poca variedad y bajo costo porque se nos acababa dinero para alimentos.” En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH2",
       "title": "“No pudimos alimentar a los niños o jóvenes del hogar con comida variada y nutritiva porque nos faltaba dinero para alimentos.” En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH3",
       "title": "“Los niños or jóvenes del hogar no comían lo suficiente porque nos faltaba dinero para comprar alimentos.” En su hogar, ¿ésto ocurrió frecuentemente, a veces, o nunca en los últimos 12 meses?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Frecuentemente"
        },
        {
         "value": "item2",
         "text": "A veces"
        },
        {
         "value": "item3",
         "text": "Nunca"
        },
        {
         "value": "item4",
         "text": "No sé, o me niego a responder"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{bool_children} = true"
    },
    {
     "name": "page_CH_2",
     "elements": [
      {
       "type": "checkbox",
       "name": "CH4",
       "title": "En los últimos 12 meses, ¿Reducieron alguna vez la cantidad de la comida de un niño o joven del hogar por falta de dinero para comprar alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH5",
       "title": "En los últimos 12 meses, ¿alguna vez algun niño o joven del hogar dejó de desayunar, almorzar o cenar por falta de dinero para alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH5a",
       "visibleIf": "{CH5} = ['item1']",
       "title": "¿Con qué frecuencia sucedió esto? Casi todos los meses, algunos meses pero no todos, o solamente en 1 ó 2 meses?",
       "choices": [
        {
         "value": "item1",
         "text": "Casi todos los meses"
        },
        {
         "value": "item2",
         "text": "Algunos meses pero no todos"
        },
        {
         "value": "item3",
         "text": "Solamente en 1 ó 2 meses"
        },
        {
         "value": "item4",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH6",
       "title": "En los últimos 12 meses, ¿alguna vez, un niño o joven del hogar tuvo hambre pero faltaba dinero para comprar más alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH7",
       "title": "En los últimos 12 meses, ¿alguna vez un niño o joven del hogar no comió en todo el día porque faltaba dinero para alimentos?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "Sí"
        },
        {
         "value": "item2",
         "text": "No"
        },
        {
         "value": "item3",
         "text": "No sé"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{CH1} anyof ['item2', 'item1'] or {CH2} anyof ['item1', 'item2'] or {CH3} anyof ['item1', 'item2']"
    }
   ]
}

export const surveyHouseholdChinese = {
   "title": "美国家庭食物安全调查",
   "logoPosition": "right",
   "pages": [
    {
     "name": "page1",
     "elements": [
      {
       "type": "html",
       "name": "Intro_1",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">以下的問題是關於你的家庭在過去的12個月內，即從去年11月起，所吃的食物，以及關於你是否能夠負擔你所需要的食物。</span></p>\n</body>\n</html>"
      },
      {
       "type": "boolean",
       "name": "bool_children",
       "title": "您家中有 18 歲以下的孩子嗎？",
       "isRequired": true,
       "labelTrue": "有",
       "labelFalse": "沒有"
      },
      {
       "type": "checkbox",
       "name": "HH1",
       "title": "以下的句子，哪一句用來形容你的家庭在過去的12個月內所吃的食物，是最適合的﹖",
       "choices": [
        {
         "value": "item1",
         "text": "有足夠我們想吃的食物"
        },
        {
         "value": "item2",
         "text": "有足夠的食物，但這些食物不一定都是我們想吃的種類"
        },
        {
         "value": "item3",
         "text": "有時候沒有足夠的食物"
        },
        {
         "value": "item4",
         "text": "經常沒有足夠的食物"
        },
        {
         "value": "item5",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page2",
     "elements": [
      {
       "type": "html",
       "name": "Intro_2",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">根據這些句子，請你告訴我句子中形容的狀況，在過去的12個月中，即是從去年11月起，是經常發生,有時候發生,還是從來沒有發生在你/你家人身上。</span></p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "HH2",
       "title": "「我們擔心在有錢去買更多食物之前，所有的食物已經吃完了。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH3",
       "title": "「我們購買的食物不夠，而且沒有錢去買更多的食物。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "HH4",
       "title": "「我們無法負擔均衡的飲食。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      }
     ]
    },
    {
     "name": "page_AD",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD1",
       "title": "在過去的12個月中，即是從去年11月起，你/你家中的其他成年人，有沒有因為不夠錢購買食物，而減少食物的份量，或者減少餐數？",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD1a",
       "visibleIf": "{AD1} = ['item1']",
       "title": "這種情況多久發生一次?-幾乎每個月,有些月份但不是每個月,還是只是1個月或2個月呢?",
       "choices": [
        {
         "value": "item1",
         "text": "幾乎每個月"
        },
        {
         "value": "item2",
         "text": "有些月份，但不是每個月"
        },
        {
         "value": "item3",
         "text": "只是1個月或2個月"
        },
        {
         "value": "item4",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD2",
       "title": "在過去的12個月中，你有沒有因為不夠錢購買食物，而吃得比你該吃的少？",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD3",
       "title": "在過去的12個月中，你有沒有因為不夠錢購買食物，而感到飢餓但沒有進食?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD4",
       "title": "在過去的12個月中，你有沒有因為不夠錢購買食物，而導致體重下降?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{HH2} anyof ['item1', 'item2'] or {HH3} anyof ['item1', 'item2'] or {HH4} anyof ['item1', 'item2'] or {HH1} anyof ['item3', 'item4']"
    },
    {
     "name": "page_AD_2",
     "elements": [
      {
       "type": "checkbox",
       "name": "AD5",
       "title": "在過去的12個月中，你/你家中的其他成年人，你有沒有因為不夠錢購買食物，而一整天沒有進食?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "AD5a",
       "visibleIf": "{AD5} = ['item1']",
       "title": "這種情況多久發生一次?-幾乎每個月,有些月份但不是每個月,還是只是1個月或2個月呢?",
       "choices": [
        {
         "value": "item1",
         "text": "幾乎每個月"
        },
        {
         "value": "item2",
         "text": "有些月份，但不是每個月"
        },
        {
         "value": "item3",
         "text": "只是1個月或2個月"
        },
        {
         "value": "item4",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{AD1} = ['item1'] or {AD2} = ['item1'] or {AD3} = ['item1'] or {AD4} = ['item1']"
    },
    {
     "name": "page_CH",
     "elements": [
      {
       "type": "html",
       "name": "Intro_CH",
       "html": "<html>\n<head>\n\t<title></title>\n</head>\n<body>\n<p><span style=\"font-size:18px;\">現在我們會問你幾句句子，是關於家裏孩子的糧食狀況。 根據這些句子，請你想一想句子中形容的狀況，在過去的12個月中，是經常發生,有時候發生,還是從來沒有發生在你家中18歲以下的孩子身上</span>。</p>\n</body>\n</html>"
      },
      {
       "type": "checkbox",
       "name": "CH1",
       "title": "「因為我們快沒有錢買食物，所以我們唯有依靠幾種便宜的食物來餵我們小孩。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH2",
       "title": "「因為我們無法負擔均衡的飲食，所以(我/我們)無法用均衡的飲食來餵我們的小孩。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH3",
       "title": "「因為我們無法負擔足夠的食物，所以我們的小孩吃得不夠。」在過去的12個月中，這種情況是經常發生,有時候發生,還是從來沒有發生在你/你家人身上呢?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "經常發生"
        },
        {
         "value": "item2",
         "text": "有時候發生"
        },
        {
         "value": "item3",
         "text": "從來沒有發生"
        },
        {
         "value": "item4",
         "text": "不知道或拒絕回答"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{bool_children} = true"
    },
    {
     "name": "page_CH_2",
     "elements": [
      {
       "type": "checkbox",
       "name": "CH4",
       "title": "在過去的12個月中，即是從去年11月起，你有沒有因為不夠錢購買食物，而減少你小孩的食物份量？",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH5",
       "title": "在過去的12個月中，有沒有因為你不夠錢購買食物，而導致小孩的用餐次數減少了？",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH5a",
       "visibleIf": "{CH5} = ['item1']",
       "title": "這種情況多久發生一次?-幾乎每個月,有些月份但不是每個月,還是只是1個月或2個月呢?",
       "choices": [
        {
         "value": "item1",
         "text": "幾乎每個月"
        },
        {
         "value": "item2",
         "text": "有些月份，但不是每個月"
        },
        {
         "value": "item3",
         "text": "只是1個月或2個月"
        },
        {
         "value": "item4",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH6",
       "title": "在過去的12個月中，有沒有你的小孩感到飢餓，但是你無法負擔更多的食物?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      },
      {
       "type": "checkbox",
       "name": "CH7",
       "title": "在過去的12個月中，有沒有因為你不夠錢購買食物，而導致小孩一整天沒有進食?",
       "isRequired": true,
       "choices": [
        {
         "value": "item1",
         "text": "有"
        },
        {
         "value": "item2",
         "text": "沒有"
        },
        {
         "value": "item3",
         "text": "不知道"
        }
       ],
       "maxSelectedChoices": 1
      }
     ],
     "visibleIf": "{CH1} anyof ['item2', 'item1'] or {CH2} anyof ['item1', 'item2'] or {CH3} anyof ['item1', 'item2']"
    }
   ]
}