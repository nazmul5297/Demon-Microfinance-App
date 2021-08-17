import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

export default class EditOffice extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.editofficeModal}
                    toggle={this.props.toggleEditofficeModal}
                >
                    <ModalHeader toggle={this.props.toggleEditofficeModal}>
                        Update Office Information
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="officeid">Office Id </Label>
                            <Input
                                id="officeid"
                                name="officeid"
                                value={this.props.editofficeData.officeid}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="officename">Office Name</Label>
                            <Input
                                id="officename"
                                name="officename"
                                value={this.props.editofficeData.officename}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="adress">Adress</Label>
                            <Input
                                id="adress"
                                name="adress"
                                value={this.props.editofficeData.adress}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="maximum_branch">Maximum Branch</Label>
                            <Input
                                id="maximum_branch"
                                name="maximum_branch"
                                value={this.props.editofficeData.maximum_branch}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="maximum_somitee">Maximum Somitee</Label>
                            <Input
                                id="maximum_somitee"
                                name="maximum_somitee"
                                value={this.props.editofficeData.maximum_somitee}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="office_in_charge">Office In Charge</Label>
                            <Input
                                id="office_in_charge"
                                name="office_in_charge"
                                value={this.props.editofficeData.office_in_charge}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                value={this.props.editofficeData.phone}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                value={this.props.editofficeData.email}
                                onChange={this.props.onChangeEditofficeHanler}
                            />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.props.updateoffice}
                        >
                            Update
                        </Button>
                        <Button
                            color="secondary"
                            onClick={this.props.toggleEditofficeModal}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}