import { Observable } from "rxjs";
import { TotsFieldForm } from "../entities/tots-field-form";
import { AutocompleteObsFieldComponent } from "../fields/autocomplete-obs-field/autocomplete-obs-field.component";
import { MatFormFieldAppearance } from "@angular/material/form-field";
import { TotsValidator } from "../entities/tots-validator";

export class TotsAutocompleteObsField extends TotsFieldForm {
	constructor(key:string, obs:()=> Observable<any>, keyToSelect:string, keyToDisplay:string, startingValueObject:any, label?:string, validators?:TotsValidator[], placeholder?:string,  appearance?:MatFormFieldAppearance, hint?:string, cssClass?:string) {
        super(key, AutocompleteObsFieldComponent, label, validators);
        this.extra = {
            obs: obs,
            selected_key: keyToSelect,
            display_key: keyToDisplay,
            first_query: startingValueObject,
            placeholder: placeholder,
            appearance: appearance,
            caption: hint,
            classes: cssClass
        };
    }
}