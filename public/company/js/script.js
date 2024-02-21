// // Function to simulate the evaluation process and predict quality
// function evaluateAndPredictQuality() {
//     // Simulate evaluation metrics
//     let textureEvaluation = Math.random() * 100; // Assuming crispy/soggy as 100%/0%
//     let flavorAssessment = Math.random() * 100; // Assuming good/bad as 100%/0%
//     let oilContent = Math.random() * 100;
//     let thickness = Math.random() * 100;

//     // Display evaluation metrics
//     let evaluationDataElement = document.getElementById('evaluationData');
//     evaluationDataElement.innerHTML = `
//         <p><strong>Texture Evaluation:</strong> ${textureEvaluation.toFixed(2)}%</p>
//         <p><strong>Flavor Assessment:</strong> ${flavorAssessment.toFixed(2)}%</p>
//         <p><strong>Oil Content:</strong> ${oilContent.toFixed(2)}%</p>
//         <p><strong>Thickness:</strong> ${thickness.toFixed(2)}%</p>
//     `;

//     // Decision making based on thresholds
//     let qualityDecision = "Reject"; // Default decision
//     if (textureEvaluation >= 50 && flavorAssessment >= 50 && oilContent <= 50 && thickness <= 50) {
//         qualityDecision = "Approve";
//     }

//     // Display quality decision
//     let decisionElement = document.getElementById('qualityDecision');
//     decisionElement.textContent = `Decision: ${qualityDecision}`;
// }

// // Call the function to evaluate and predict crisps quality
// evaluateAndPredictQuality();


// public/script.js

// Function to simulate the evaluation process and predict quality
function evaluateAndPredictQuality(textureEvaluation, oilContent, thickness,flavorAssessment) {
    // Display received data
    console.log('Texture Value:', textureEvaluation);
    console.log('Oil Content:', oilContent);
    console.log('Thickness:', thickness);

    // Use the received data for evaluation
    let textureEvaluationValue = parseFloat(textureEvaluation);
    let oilContentValue = parseFloat(oilContent);
    let thicknessValue = parseFloat(thickness);
    let flavorAssessmentValue = parseFloat(flavorAssessment);
    console.log(textureEvaluationValue)

    // Display evaluation metrics
    let evaluationDataElement = document.getElementById('evaluationData');
    evaluationDataElement.innerHTML = `
        <p><strong>Texture Evaluation:</strong> ${textureEvaluationValue.toFixed(2)}%</p>
        <p><strong>Oil Content:</strong> ${oilContentValue.toFixed(2)}%</p>
        <p><strong>Thickness:</strong> ${thicknessValue.toFixed(2)}%</p>
        <p><strong>Thickness:</strong> ${flavorAssessment.toFixed(2)}%</p>

    `;

    // Decision making based on thresholds
    let qualityDecision = "Reject"; // Default decision
    if (textureEvaluationValue >= 50 && oilContentValue <= 50 && thicknessValue <= 50) {
        qualityDecision = "Approve";
    }

    // Display quality decision
    let decisionElement = document.getElementById('qualityDecision');
    decisionElement.textContent = `Decision: ${qualityDecision}`;
}

// Call the function to evaluate and predict crisps quality
evaluateAndPredictQuality();

