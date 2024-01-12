const Help = () => {
    const faqs = [
        {
          question: 'How do I access my grades?',
          answer: 'You can access your grades by logging into the system with your username and password. Navigate to the "Grades" or "Report Card" section to view your current grades.',
        },
        {
          question: 'When are grades updated?',
          answer: 'Grades are typically updated at the end of each grading period or semester. However, it\'s advisable to check with your instructors or the system administrator for specific update schedules.',
        },
        {
          question: 'What do the different grade statuses mean?',
          answer: 'Common grade statuses include "In Progress," "Completed," "Pending," and "Finalized." Check the system\'s documentation or contact your instructors for detailed information about each status.',
        },
        {
          question: 'How can I report a grading error?',
          answer: 'If you believe there is an error in your grades, please contact your instructor or the school administration as soon as possible. Provide specific details about the issue for prompt resolution.',
        },
        {
          question: 'Can I download a copy of my report card?',
          answer: 'Yes, you can usually download a copy of your report card in PDF or other formats. Look for a "Download" or "Print" option in the grade reporting system.',
        },
        
      ];
    
    
    return ( 
        <div>
            <Navbar/>
            <h1>Frequently Asked Questions</h1>
            <div>
            <h2>Frequently Asked Questions</h2>

            <ul>
            {faqs.map((faq, index) => (
                <li key={index}>
                <strong>{`Q: ${faq.question}`}</strong>
                <p>{`A: ${faq.answer}`}</p>
                </li>
            ))}
            </ul>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Help;