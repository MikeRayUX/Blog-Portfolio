import React from 'react';
import '../components/layout.css';
import fonts from '../constants/font_names';
import ProjectItem from '../components/index/ProjectItem';
import LatestPostsLists from '../components/index/LatestPostsList';
import SidebarLayout from '../components/layouts/SidebarLayout';

const Index = () => {
  return (
    <SidebarLayout
      meta_title="Mike Ray, Seattle Product Engineer - Home"
      meta_description="Mike Ray, Seattle Product Engineer Web Developer - Home"
      highlighted_hero_link={'home'}
    >
      {/* apps start */}
      <div className="sm:max-w-screen-sm mx-auto">
        <h3
          style={{ fontFamily: fonts.bold }}
          className="text-lg text-gray-900 mb-3 sm:mb-5"
        >
          My Apps
        </h3>
        <ProjectItem
          title="Minty Snippets"
          underline_color="#3661F2"
          underline_width={165}
          time_range="2022"
          description="Make your job search less repetitive."
          route="/projects/minty_snippets"
        />
        <ProjectItem
          title="Fresh And Tumble"
          underline_color="#D70CF5"
          underline_width={200}
          time_range="2019 - 2021"
          description="Uber for Laundry"
          route="/projects/fresh_and_tumble"
        />
        <ProjectItem
          title="Flex Mate"
          underline_color="#FE8B28"
          underline_width={110}
          time_range="2018"
          description="Help Amazon Flex Drivers estimate often unaccounted for fuel expenses. "
          route="/projects/flex_mate"
        />
      </div>
      {/* apps end */}
      {/* latest posts start */}
      <LatestPostsLists />
      {/* latest posts end */}
    </SidebarLayout>
  );
};

export default Index;
