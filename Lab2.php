<?php
session_start();
if(isset($_POST['submit'])) {
// log new art work record
$newArt = array("genre" => $_POST['genre'],
                "type" => $_POST['art_type'],
                "subject" => $_POST['subject'],
                "specification" => $_POST['specs'],
                "year" => $_POST['year'],
                "museum" => $_POST['museum']);
    if (!isset($_SESSION['artDB'])) {
    $_SESSION['artDB'] = array();
    }
    $_SESSION['artDB'][] = $newArt;
    print_r($_SESSION['artDB']);
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Art Work</title>
        <link rel="stylesheet" href="Lab2.css"/>
        <script>

            // adds dropdown option for "Subject" if user selects 
            function addForm(value) {
                var element = document.getElementById('paintDetails');
                element.innerHTML = "" //empty 
                if (document.getElementById('selectedType').innerHTML == "Painting") {
                  element.innerHTML = `<label for="subject"><span>Subject:</span>
                    <select name="artDB[subject]" id="subject" onChange="document.getElementById('selectedSubject').innerHTML = this.value;">
                        <option value="none" selected disabled hidden>Select a subject</option>
                        <option value="Landscape">Landscape</option>
                        <option value="Portrait">Portrait</option>
                    </select></label>`;
                } else {
                    element.innerHTML = ""
                    document.getElementById('selectedSubject').innerHTML = ""
                }
            }
        </script> 
    </head>
    <body>
        <!-- Title and page description -->
        <div id="header">
            <h2>Art Work Database</h2>
            <p>This collection of art pieces contains Contemporary art, Abstract expressionism, and Pop art from the 20th Century. </p>
        </div>

        <div class="container">
        <div class="formDiv">
            <form id="createEntry" action="<?php echo $_SERVER['PHP_SELF'];?>" method="post">
                <label for="genre"><span>Genre:</span>
                <select name="genre" id="genre" onChange="document.getElementById('selectedGenre').innerHTML = this.value;">
                    <option value="none" selected disabled>Select a genre</option>
                    <option value="Abstract">Abstract</option>
                    <option value="Baroque">Baroque</option>
                    <option value="Gothic">Gothic</option>
                    <option value="Renaissance">Renaissance</option>
                </select></label>

                <label for="art_type"><span>Type:</span>
                <select name="art_type" id="art_type" onChange="document.getElementById('selectedType').innerHTML = this.value; addForm(this.value);">
                    <option value="none" selected disabled hidden>Select a type</option>
                    <option value="Painting">Painting</option>
                    <option value="Sculpture">Sculpture</option>
                </select></label>
                <div class="row" id="paintDetails"></div>

                <label for="specs"><span>Specification:</span>
                <select name="specs" id="specs" onChange="document.getElementById('selectedSpec').innerHTML = this.value;">
                    <option value="none" selected disabled hidden>Select a specification</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Non-commercial">Non-commercial</option>
                    <option value="Derivative Work">Derivative Work</option>
                    <option value="Non-derivative Work">Non-derivative Work</option>
                </select></label>

                <label for="year"><span>Year:</span>
                <input type="number" name="year" min="900" max="2099" step="1" placeholder="2023" onChange="document.getElementById('selectedYear').innerHTML = this.value;"/></label>
                    
                <label for="museum"><span>Museum:</span>
                <input type="text" name="museum" id="museum"  placeholder="Enter a museum" onChange="document.getElementById('selectedMuseum').innerHTML = this.value;"/></label>   
                
                <div id="buttonDiv">
                    <!-- entered data will be erased from page -->
                    <input type="button" onclick="clearEnteredData()" value="Clear Record">
                    <!-- entered data will be saved in a record in array -->
                    <input type="submit" id="submit" value="Save Record" name="submit">
                </div>
            </form>
        </div>
        <div id="tableDiv">
            <h6>Art Work Record</h6>
        <!-- art work record, updates as user makes selections -->
            
            <table>
                <tr>
                    <th><p><b>Genre</b></p></th>
                    <th><p><b>Type</b></p></th>
                    <th><p><b>Subject</b></p></th>
                    <th><p><b>Specification</b></p></th>
                    <th><p><b>Year</b></p></th>
                    <th><p><b>Museum</b></p></th>
                </tr>
                <tr>
                    <td><p><span id="selectedGenre"></span></p></td>
                    <td><p><span id="selectedType"></span></p></td>
                    <td><p><span id="selectedSubject"></span></p></td>
                    <td><p><span id="selectedSpec"></span></p></td>
                    <td><p><span id="selectedYear"></span></p></td>
                    <td><p><span id="selectedMuseum"></span></p></td>
                </tr>
            </table>
        </div>
    </div>

        <script>
            function clearEnteredData() {
                /* updates the art work record table with current selected menu options */
                document.getElementById("createEntry").reset();
                for (var i = 0; i < 6; i++) {
                document.getElementById("tableDiv").getElementsByTagName("span")[i].innerHTML = "";
                }
            }
        </script>
        
    </body>
</html>