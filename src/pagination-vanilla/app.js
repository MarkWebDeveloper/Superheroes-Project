import './style.css'

// Access to the elements

const elementsNumber = [...Array(100).keys()]
const paginatedList = document.getElementById("paginated-list");

fillContainer();

const paginationNumbers = document.getElementById("pagination-numbers");
const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

// Setting up variables

const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;

// Function to fill the container

function fillContainer() {
  for (let index = 0; index < elementsNumber.length; index++) {
    paginatedList.innerHTML += /* html */ `
    <li>Item ${index + 1}</li>
    `
  }
}

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

const hideButton = (index) => {
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
        hideButton(i)
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
    let currentButton = document.querySelector(`[page-index="${i}"]`);
    let nextButton = document.querySelector(`[page-index="${i + 1}"]`);
    let previousButton = document.querySelector(`[page-index="${i - 1}"]`);
    let beforePreviousButton = document.querySelector(
      `[page-index="${i - 2}"]`
    );
    let dots = document.querySelectorAll(".dots");

    if (currentButton.classList.contains("active")) {
      currentButton.classList.remove("hidden");
    }

    if (
      currentButton.classList.contains("active") &&
      currentButton.getAttribute("page-index") < 3
    ) {
      document.querySelector(`[page-index="1"]`).classList.remove("hidden");
      document.querySelector(`[page-index="2"]`).classList.remove("hidden");
      document.querySelector(`[page-index="3"]`).classList.remove("hidden");
      nextButton.classList.remove("hidden");
      dots.forEach((element) => {
        element.remove();
      });
      insertAfter(document.querySelector(`[page-index="3"]`), createDots());
      for (let index = pageCount - 1; index > 3; index--) {
        hideButton(index);
      }
    }

    if (
      currentButton.classList.contains("active") &&
      currentButton.getAttribute("page-index") == 3
    ) {
      dots.forEach((element) => {
        element.remove();
      });
      nextButton.classList.remove("hidden");
      insertAfter(nextButton, createDots());
      previousButton.classList.remove("hidden");
      insertAfter(
        document.querySelector(`[page-index="${i - 2}"]`),
        createDots()
      );
      for (let index = pageCount - 1; index > i + 1; index--) {
        hideButton(index);
      }
    }

    if (
      currentButton.classList.contains("active") &&
      currentButton.getAttribute("page-index") > 3 &&
      currentButton.getAttribute("page-index") < pageCount - 1
    ) {
      dots.forEach((element) => {
        element.remove();
      });
      nextButton.classList.remove("hidden");
      insertAfter(nextButton, createDots());
      previousButton.classList.remove("hidden");
      beforePreviousButton.classList.add("hidden");
      insertAfter(
        document.querySelector(`[page-index="${i - 2}"]`),
        createDots()
      );
      for (let index = pageCount - 1; index > i + 1; index--) {
        hideButton(index);
      }
    }

    if (
      currentButton.classList.contains("active") &&
      currentButton.getAttribute("page-index") == pageCount - 1
    ) {
      dots.forEach((element) => {
        element.remove();
      });
      nextButton.classList.remove("hidden");
      previousButton.classList.remove("hidden");
      beforePreviousButton.classList.add("hidden");
      insertAfter(
        document.querySelector(`[page-index="${i - 2}"]`),
        createDots()
      );
      for (let index = pageCount - 1; index > i + 1; index--) {
        hideButton(index);
      }
    }

    if (
      currentButton.classList.contains("active") &&
      currentButton.getAttribute("page-index") == pageCount
    ) {
      document.querySelector(`[page-index="${i}"]`).classList.remove("hidden");
      document
        .querySelector(`[page-index="${i - 1}"]`)
        .classList.remove("hidden");
      document
        .querySelector(`[page-index="${i - 2}"]`)
        .classList.remove("hidden");
      dots.forEach((element) => {
        element.remove();
      });
      insertAfter(
        document.querySelector(`[page-index="${i - 3}"]`),
        createDots()
      );
      for (let index = pageCount - 3; index > 1; index--) {
        hideButton(index);
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