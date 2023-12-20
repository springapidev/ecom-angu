// // Get all elements with the 'text-area' class
// var textAreas = document.querySelectorAll('.text-area');

// // Initialize Quill editors for each 'editor-container'
// var quills = [];
// document.querySelectorAll('.editor-container').forEach(function (container) {
//     var snowEditorData = {
//         theme: 'snow',
//         modules: {
//             'toolbar': [
//                 [{ 'font': [] }, { 'size': [] }],
//                 ['bold', 'italic', 'underline', 'strike'],
//                 [{ 'color': [] }, { 'background': [] }],
//                 [{ 'script': 'super' }, { 'script': 'sub' }],
//                 [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'],
//                 [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
//                 ['direction', { 'align': [] }],
//                 ['link', 'image', 'video'],
//                 ['clean']
//             ]
//         }
//     };

//     quills.push(new Quill(container, snowEditorData));
// });

// // Sync each Quill editor with its corresponding textarea
// quills.forEach(function (quill, index) {
//     var textarea = textAreas[index];
//     quill.on('text-change', function() {
//         textarea.value = quill.root.innerHTML;
//     });

//     textarea.addEventListener('input', function() {
//         quill.root.innerHTML = textarea.value;
//     });
// });

var snowEditor = document.querySelectorAll(".snow-editor")
    snowEditor.forEach(function (item) {
        var snowEditorData = {};
        var issnowEditorVal = item.classList.contains("snow-editor");
        if (issnowEditorVal==true) {
            snowEditorData.theme = 'snow',
            snowEditorData.modules = {
            'toolbar': [[{ 'font': [] }, { 'size': [] }], ['bold', 'italic', 'underline', 'strike'],
             [{ 'color': [] }, { 'background': [] }], [{ 'script': 'super' }, { 'script': 'sub' }], 
             [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'], 
             [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }], 
             ['direction', { 'align': [] }], ['link', 'image', 'video'], ['clean']]
        }
        }
    new Quill(item, snowEditorData);
});

