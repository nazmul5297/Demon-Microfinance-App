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

export default class Editbranch extends Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.editbranchModal}
                    toggle={this.props.toggleEditbranchModal}
                >
                    <ModalHeader toggle={this.props.toggleEditbranchModal}>
                        Update Branch Information
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="officeid">Office Id </Label>
                            <Input
                                id="officeid"
                                name="officeid"
                                value={this.props.editbranchData.officeid}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="branchid">branch Id </Label>
                            <Input
                                id="branchid"
                                name="branchid"
                                value={this.props.editbranchData.branchid}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="branchname">branch Name</Label>
                            <Input
                                id="branchname"
                                name="branchname"
                                value={this.props.editbranchData.branchname}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="adress">Adress</Label>
                            <Input
                                id="adress"
                                name="adress"
                                value={this.props.editbranchData.adress}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="maximum_somitee">Maximum Somitee</Label>
                            <Input
                                id="maximum_somitee"
                                name="maximum_somitee"
                                value={this.props.editbranchData.maximum_somitee}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="branch_in_charge">branch In Charge</Label>
                            <Input
                                id="branch_in_charge"
                                name="branch_in_charge"
                                value={this.props.editbranchData.branch_in_charge}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input
                                id="phone"
                                name="phone"
                                value={this.props.editbranchData.phone}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                value={this.props.editbranchData.email}
                                onChange={this.props.onChangeEditbranchHanler}
                            />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={this.props.updatebranch}
                        >
                            Update
                        </Button>
                        <Button
                            color="secondary"
                            onClick={this.props.toggleEditbranchModal}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}