import { useState } from 'react';

const AddRecipeForm = () => {
 const [title, setTitle] = useState('');
 const [ingredients, setIngredients] = useState('');
 const [instructions, setInstructions] = useState('');
 const [steps, setSteps] = useState('');
 const [errors, setErrors] = useState({});

 // Validation function to check if all fields are filled out
 const validate = () => {
   const newErrors = {};

   if (!title.trim()) {
     newErrors.title = 'Title is required';
   }

   if (!ingredients.trim()) {
     newErrors.ingredients = 'Ingredients are required';
   } else if (ingredients.split(',').length < 2) {
     newErrors.ingredients = 'Please provide at least two ingredients';
   }

   if (!instructions.trim()) {
     newErrors.instructions = 'Instructions are required';
   }

   if (!steps.trim()) {
     newErrors.steps = 'Steps are required';
   } else if (steps.split('.').length < 2) {
     newErrors.steps = 'Please provide at least two steps';
   }

   setErrors(newErrors);
   return Object.keys(newErrors).length === 0;
 };

 const handleSubmit = (e) => {
   e.preventDefault();

   if (validate()) {
     // If validation passes, submit the form data
     const newRecipe = {
       title,
       ingredients: ingredients.split(','),
       instructions,
       steps: steps.split('.'),
     };

     console.log('Recipe Submitted:', newRecipe);

     // Clear form fields
     setTitle('');
     setIngredients('');
     setInstructions('');
     setSteps('');
     setErrors({});
   }
 };

 return (
   <div className="container mx-auto p-4">
     <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl md:text-4xl">Add New Recipe</h1>
     <form onSubmit={handleSubmit} className="max-w-lg mx-auto shadow-lg p-6 bg-white rounded-lg">
       <div className="mb-4">
         <label className="block text-gray-700">Recipe Title</label>
         <input
           type="text"
           value={title}
           onChange={(e) => setTitle(e.target.value)}
           className="w-full border p-2 rounded shadow-md"
         />
         {errors.title && <p className="text-red-500">{errors.title}</p>}
       </div>

       <div className="mb-4">
         <label className="block text-gray-700">Ingredients (comma separated)</label>
         <textarea
           value={ingredients}
           onChange={(e) => setIngredients(e.target.value)}
           className="w-full border p-2 rounded shadow-md"
         ></textarea>
         {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
       </div>

       <div className="mb-4">
         <label className="block text-gray-700">Instructions</label>
         <textarea
           value={instructions}
           onChange={(e) => setInstructions(e.target.value)}
           className="w-full border p-2 rounded shadow-md"
         ></textarea>
         {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
       </div>

       <div className="mb-4">
         <label className="block text-gray-700">Steps (period separated)</label>
         <textarea
           value={steps}
           onChange={(e) => setSteps(e.target.value)}
           className="w-full border p-2 rounded shadow-md"
         ></textarea>
         {errors.steps && <p className="text-red-500">{errors.steps}</p>}
       </div>

       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-700">
         Submit Recipe
       </button>
     </form>
   </div>
 );
};

export default AddRecipeForm;
