import { Story } from "@storybook/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";
import FileList from "../FileList";

const axiosMock = new MockAdapter(axios);

export default {
  title: "FileList",
  component: FileList,
};

const Template: Story = (_args) => {
  axiosMock.onGet("api/list_files").reply(200, {
    files: [
      { filename: "z-axis-stabilizer.ctb", print_time_secs: 3600 },
      { filename: "case v2.ctb", print_time_secs: 3540 },
      { filename: "lattice.ctb", print_time_secs: 11100 },
      { filename: "pi zero case 2.ctb", print_time_secs: 1800 },
      { filename: "pi zero case.ctb", print_time_secs: 9000 },
      { filename: "pi stem case.ctb", print_time_secs: 3600 },
      { filename: "_Ark-chitu.ctb", print_time_secs: 3600 },
      { filename: "_Ark-3.ctb", print_time_secs: 3600 },
      { filename: "ark-base.ctb", print_time_secs: 3600 },
      { filename: "rake-that-doesnt-break.ctb", print_time_secs: 3600 },
      { filename: "sd card case.ctb", print_time_secs: 3600 },
      { filename: "_rake_in_the_lake_-_rake.ctb", print_time_secs: 3600 },
      { filename: "rake-no-gods-no-masters.ctb", print_time_secs: 3600 },
      { filename: "Busbar-cover.ctb", print_time_secs: 3600 },
      { filename: "Busbar-cover-again.ctb", print_time_secs: 3600 },
      { filename: "LittleBBC.ctb", print_time_secs: 3600 },
    ],
  });
  return <FileList />;
};

export const Default = Template.bind({});
