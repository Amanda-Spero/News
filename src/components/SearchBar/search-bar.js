import React, {Component} from 'react';

import './search-bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
      {/* Newspaper Radio Selections */}
        <h2>Choose one or more news sites</h2>
        <div className="radio-buttons-div">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
            <label class="form-check-label" for="inlineCheckbox1">The Washington Post</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
            <label class="form-check-label" for="inlineCheckbox2">Al Jazeera English</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
            <label class="form-check-label" for="inlineCheckbox3">BBC News</label>
          </div>
      </div>
      <div>
          <input type="text" class="form-control" placeholder="Search Keywords" />
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="byDate" value="byDate"/>
            <label class="form-check-label" for="inlineCheckbox3">Sort by most recent</label>
          </div>
          <button type="submit">Search
          </button>
        </div>
    </div>
    )
  }

}

export default SearchBar;