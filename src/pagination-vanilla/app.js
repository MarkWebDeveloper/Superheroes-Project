import './style.css'

// Access to the elements

const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Setting up variables

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

// Function for creating page number buttons

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};

// Function for creating dots

const createDots = () => {
  const dots = document.createElement("button")
  dots.className = "dots"
  dots.innerHTML = "..."
  return dots
}

// Function for hiding buttons

const hideButtons = (index) => {
  const selectedButtons = document.querySelector(`[page-index="${index}"]`)
  selectedButtons.classList.add("hidden")
}

// Function for inserting element after another

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Function for removing element

function removeElement(elementQuery) {
  const element = document.querySelector(elementQuery)
  element.remove()
}

// Function for creating number buttons

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);

    if (pageCount > 4) {
      if (i == 4) {
        hideButtons(i)
        insertAfter(document.querySelector(`[page-index="3"]`), createDots())
      }
    }

  }
};

// Event listener

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);
  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });
  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });
  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// Set the value of the currentPage variable to the pageNum value:

// Function for setting the current page

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  handleActivePageNumber();
  handlePageButtonsStatus();
  handleDots();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;
  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

// Function for making a page active

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

// Function for handling dots

const handleDots = () => {
  for (let i = 1; i <= pageCount; i++) {
    let currentButton = document.querySelector(`[page-index="${i}"]`)
    let nextButton = document.querySelector(`[page-index="${i + 1}"]`)
    let dots = document.querySelector('.dots')

    if (pageCount > 4) {

      if (currentButton.getAttribute("class") === "pagination-number active" && currentButton.getAttribute("page-index") >= 3) {
        dots.remove()
        nextButton.classList.remove("hidden")
      }
    }

  }
};

// Functions for disabling and enabling next and previous buttons

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }
  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};