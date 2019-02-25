import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class BlockingLayer extends Component {
    constructor(props){
        super(props);   
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
    }

    render() {
      let layerWidth = 0;
      let layerHeight = 0;

      const { schedulerData } = this.props;
      const layerClassRtl = schedulerData.config.isRtl ? ' rtl-layer' : '';
      const index = schedulerData.disabledIndex || 0;
      if (index > 0) {
        layerWidth = schedulerData.getContentCellWidth() * index;
        layerHeight = schedulerData.renderData.length * (schedulerData.config.eventItemLineHeight + 2);        
      }   

      return (
        <div className={`scheduler-blocking-layer${layerClassRtl}`}>
          <div className="layer" style={{width: layerWidth, height: layerHeight}}>
          </div>
        </div>           
      );
    }
}

export default BlockingLayer
